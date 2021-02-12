<?php

namespace App\Http\Controllers;

use App\Mail\RegisterUserMail;
use App\Mail\ActiveUserMail;
use App\Mail\DeactiveUserMail;
use App\User;
use App\Mail\VerifyMail;
use Mail;
use Illuminate\Support\Facades\Storage;
use Twilio\Exceptions\TwilioException;
use Twilio\Rest\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
  public function login()
  {
    $credentials = [
      'email' => request('email'),
      'password' => request('password')
    ];

    if (Auth::validate($credentials)) {
      $user = Auth::getLastAttempted();
      if ($user->is_active) {
        Auth::login($user);
        $user = User::find(Auth::id());
        return response()->json($this->successResponse($user), 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json([
          'error' => 'Unauthorised',
          'message' => 'You are not activated by Admin'
        ], 401);
      }
      // if (Auth::attempt($credentials)) {
      //   $user = User::find(Auth::id());
      //   return response()->json($this->successResponse($user), 200);
      // }
    } else {
      return response()->json([
        'error' => 'Unauthorised',
        'message' => 'Wrong E-Mail or Password.'
      ], 404);
    }
  }

  public function register(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required',
      'email' => 'required|email',
      'password' => 'required',
    ]);

    if ($validator->fails()) {
      return response()->json(['message'=>'User Info is not correct, Please check again','error' => $validator->errors()], 401);
    }
    $loggedUser = Auth::user();
    if (!$loggedUser) {
      $parent_id = User::where('user_type', 0)->get()[0]->id;
    } else {
      $parent_id = $loggedUser->id;
    }
    
    $input = $request->all();
    $input['password'] = bcrypt($input['password']);
    $input['parent_id'] = $parent_id;
    $user = User::create($input);
    $successUser = $this->successResponse($user);
    $this->sendRegisterEmail('lukas.tarutis@gmail.com', $user->email);
    return response()->json(['success' => $successUser], 200, [], JSON_NUMERIC_CHECK);
    // } else {
    //   return response()->json(['failed'=>'Logged in User is not Admin'], 401);
    // }
  }

  public function updateUser(Request $request)
  {
    $validator = Validator::make($request['data'], [
      'name' => 'required',
      'email' => 'required|email',
      'password' => 'required',
    ]);

    if ($validator->fails()) {
      return response()->json(['message'=>'User Info is not correct, Please check again','error' => $validator->errors()], 401);
    }
    $loggedUser = Auth::user();
    if (!$loggedUser) {
      $parent_id = User::where('user_type', 0)->get()[0]->id;
    } else {
      $parent_id = $loggedUser->id;
    }
    $userData = $request['data'];
    $user_id = $request['conditions']['id'];
    $userData['password'] = bcrypt($userData['password']);
    $userData['parent_id'] = $parent_id;
    $user_roles = implode(",", $userData['user_roles']);
    $userData['user_roles'] = $user_roles;
    $user = User::find($user_id);
    $user->update($userData);
    return response()->json(['success' => 'success', 'user' => $user], 200, [], JSON_NUMERIC_CHECK);
  }
  public function removeUser(Request $request) {
    $loggedUser = Auth::user();
    if (!$loggedUser->user_type) {
      $user_id = $request['conditions']['id'];
      User::find($user_id)->delete();
      return response()->json(['success' => 'success'], 200, [], JSON_NUMERIC_CHECK);
    } else {
      return response()->json(['failed'=>'Logged in User is not Admin'], 401);
    }
  }

  public function sendRegisterEmail($adminEmail, $userEmail) {
    Mail::to($adminEmail)->send(new RegisterUserMail($userEmail));
  }

  public function activeUser(Request $request) {
    $loggedUser = Auth::user();
    if (!$loggedUser->user_type) {
      $user_id = $request['conditions']['id'];
      $is_active = $request['is_active'];
      $user = User::find($user_id);
      $user->update(['is_active' => $is_active]);
      $this->sendActiveEmail($user->email, $is_active);
      return response()->json(['success' => 'success', 'user' => $user], 200, [], JSON_NUMERIC_CHECK);
    } else {
      return response()->json(['failed'=>'Logged in User is not Admin'], 401);
    }
  }
  public function sendActiveEmail($email, $is_active) {
    if ($is_active) {
      Mail::to($email)->send(new ActiveUserMail($email));
    } else {
      Mail::to($email)->send(new DeactiveUserMail($email));
    }
  }

  public function uploadUserAvatar(Request $request)
  {
    $this->validate($request, [
      'image' => 'required|image|max:2048',
    ]);

    if ($request->hasFile('image')) {
      $file = $request->file('image');
      $name = time() . $file->getClientOriginalName();
      $filePath = $name;
      Storage::disk('s3')->put($filePath, file_get_contents($file));
      $path = Storage::disk('s3')->url($name);
      return response()->json([
        'success' => 'upload success',
        'path' => $path
      ], 200, [], JSON_NUMERIC_CHECK);
    } else {
      return response()->json([
        'message' => 'Upload failed',
      ], 404);
    }
  }

  public function confirmUser(Request $request) {
//    return $request->user();
    $user = Auth::user();
    $user->update(['is_active' => 1]);
    return response()->json([
      'success' => 'User Verification is success',
      'user' => $user
    ], 200, [], JSON_NUMERIC_CHECK);
  }
  public function validateUser(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'email' => 'required|email',
      'phone' => 'required',
      'driver_license' => 'required',
    ]);

    if ($validator->fails()) {
      return response()->json(['message' => $validator->errors()], 401);
    }
    $input = $request->all();
    $validateItems = ['email', 'phone', 'driver_license'];
    $validateKeys = ['email' => 'Email', 'phone' => 'Phone Number', 'driver_license' => 'Driver License / ID Number'];
    foreach ($validateItems as $item) {
      $userCount = count(User::where($item, $input[$item])->get());
      if ($userCount) {
        return response()->json(['message' => $validateKeys[$item] . ' ' . $input[$item] . ' is already exist'], 409);
      }
    }
    return response()->json(['success' => $input], 200, [], JSON_NUMERIC_CHECK);
  }

  public function sendVerifyEmail(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'email' => 'required|email'
    ]);

    if ($validator->fails()) {
      return response()->json(['message' => 'Email Verification is failed, Please try again'], 401);
    }
    $input = $request->all();
    $to_email = $input['email'];
    $verification_code = mt_rand(100000, 999999);
    $encoded_code = base64_encode($verification_code + 111111);

    try {
      Mail::to($to_email)->send(new VerifyMail($input, $verification_code));
      return response()->json([
        'success' => 'Verification is sent to your email',
        'code' => $encoded_code
      ], 200);
    } catch (\Exception $e) {
      return response()->json(['message' => 'Email Verification is failed, Please try again'], 401);
    }
  }

  public function myProfile(Request $request)
  {
    return response()->json(['success' => 'success', 'user' => Auth::user()]);
  }
  public function updateProfile(Request $request)
  {
    $userData = $request['data'];
    $user = Auth::user();
    $user->update($userData);
    return response()->json(['success' => 'success', 'user' => $user], 200, [], JSON_NUMERIC_CHECK);
  }

  public function getClients(Request $request) {
    if (Auth::user()->user_type == 0) {
      $start = $request['start'] ? $request['start'] : 0;
      $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
      $sortBy = $request['sortBy'] ? $request['sortBy'] : 'name';
      $desc = $request['descending'] ? 'DESC' : 'ASC';

      if ($request['conditions'] && $request['conditions']['filter']) {
        $search = $request['conditions']['filter'];
        $totalCount = count(User::where('user_type', '1')->where('name', 'like', '%' . $search . '%')->get());
        $users = User::where('user_type', '1')->where('name', 'like', '%' . $search . '%')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
      } else {
        $totalCount = count(User::where('user_type', '1')->get());
        $users = User::where('user_type', '1')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
      }
      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $users], 200, [], JSON_NUMERIC_CHECK);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function getUsers(Request $request) {
    if (Auth::user()->user_type < 2) {
      $start = $request['start'] ? $request['start'] : 0;
      $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
      $sortBy = $request['sortBy'] ? 'users.'.$request['sortBy'] : 'users.name';
      $desc = $request['descending'] ? 'DESC' : 'ASC';

      $parent_id = Auth::id();
      $users = User::leftJoin('users as parents', 'users.parent_id', '=', 'parents.id')->where('users.user_type', '2');
      if ($request['conditions'] && isset($request['conditions']['filter'])) {
        $search = $request['conditions']['filter'];
        $users = $users->where('name', 'like', '%' . $search . '%');
      }
      $users = $users->where('users.parent_id', $parent_id);
      $totalCount = count($users->get());
      $users = $users->select('users.id', 'users.name', 'users.full_name', 'users.email', 'users.phone', 'users.belongs','users.zipcode', 'users.user_roles', 'users.is_active', 'parents.name as parent_username', 'parents.full_name as parent_name')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $users], 200, [], JSON_NUMERIC_CHECK);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function getUserDetails(Request $request) {
    $user_id = $request->query()['id'];
    try {
      $user = User::find($user_id);
      return response()->json(['success'=>'success', 'user' => $user], 200, [], JSON_NUMERIC_CHECK);
    } catch (\Exception $e) {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function getBookings(): \Illuminate\Support\Collection
  {
    $bookings = DB::table('bookings')
      ->join('meeting_rooms', 'bookings.room_id', '=', 'meeting_rooms.id')
      ->select('bookings.*', 'meeting_rooms.name')
      ->where('user_id', '=', Auth::id())
      ->where('end_at', '>=', date('Y-m-d H:i:s'))
      ->orderBy('start_at')
      ->get();
    return $bookings->groupBy('name');
  }

  private function successResponse(User $user)
  {
    $freshToken = $user->createToken('MyApp');
    $success['user'] = $user;
    $success['token'] = $freshToken->accessToken;
    $success['expiresAt'] = $freshToken->token->expires_at;

    return $success;
  }
}
