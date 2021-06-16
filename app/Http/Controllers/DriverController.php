<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Auth;
use Response;
use Illuminate\Support\Facades\Input;
use App\Report;
use App\Driver;
use App\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class DriverController extends Controller
{
  public function __construct()
  {
    // $this->middleware('driverAuth');
  }
  public function login()
  {
    $credentials = [
      'email' => request('email'),
      'password' => request('password')
    ];

    if (Auth::guard('driver')->validate($credentials)) {
      $driver = Auth::guard('driver')->getLastAttempted();
      if ($driver->has_access) {
        Auth::guard('driver')->login($driver);
        $driver = Driver::find(Auth::guard('driver')->id());
        return response()->json($this->successResponse($driver), 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json([
          'error' => 'Unauthorised',
          'message' => 'You dont have permission to login'
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
  private function successResponse(Driver $driver)
  {
    $freshToken = $driver->createToken('MyApp');
    $success['driver'] = $driver;
    $success['token'] = $freshToken->accessToken;
    $success['expiresAt'] = $freshToken->token->expires_at;

    return $success;
  }
  //
  public function getRNCID(Request $request) {
    if (Auth::user()) {
      $user_id = Auth::user()->id;
      $rnc = Driver::whereUserId($user_id)->where('driver_name', 'RNC')->where('deleted_date', NULL)->get();
      if (count($rnc)) {
        return response()->json(['success' => 'success', 'data'=>$rnc[0]->id], 200, [], JSON_NUMERIC_CHECK);
      } else {
        $rnc = new Driver;
        $rnc->driver_name = 'RNC';
        $rnc->user_id = $user_id;
        $rnc->save();
        return response()->json(['success' => 'success', 'data'=>$rnc->id], 200, [], JSON_NUMERIC_CHECK); 
      }
    }
  }

  public function getDriverAll(Request $request) {
    if (Auth::user()) {
      $report_datetime = $request->query()['report_datetime'];
      if (!isset($report_datetime)) $report_datetime = date('Y-m-d h:i:s');
      $user = Auth::user();
      if ($user->user_type == '0') {
        $drivers = Driver::where('deleted_date', NULL)->orWhere('deleted_date', '>', $report_datetime)->get();
      } else {
        if ($user->user_type == '1') {
          $depot_id = $request->query()['depot_id']?$request->query()['depot_id']:"";
          $drivers = Driver::whereUserId($user->id)->where('depot_id', $depot_id)->where('deleted_date', NULL)->orWhere('deleted_date', '>', $report_datetime)->get();
        } else {
          $drivers = Driver::where(function($q) use ($user) {
            $q->whereUserId($user->id)->orWhere(function($q2) use ($user) {
              $q2->where('user_id', $user->parent_id)
                ->where('depot_id', $user->depot_id);
            });
          })->where('deleted_date', NULL)->orWhere('deleted_date', '>', $report_datetime)->get();
          // $drivers = Driver::whereUserId($user->id)->where('deleted_date', NULL)->orWhere('deleted_date', '>', $report_datetime)->get();
        }
      }
      return response()->json(['success'=>'success', 'data' => $drivers], 200, [], JSON_NUMERIC_CHECK);
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  
  public function getDrivers (Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      $start = $request['start'] ? $request['start'] : 0;
      $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
      $sortBy = $request['sortBy'] ? $request['sortBy'] : 'driver_name';
      $desc = $request['descending'] ? 'DESC' : 'ASC';

      if ($request['conditions'] && $request['conditions']['filter']) {
        $search = $request['conditions']['filter'];
        if ($user->user_type == '0') {
          $totalCount = count(Driver::where('driver_name', 'like', '%' . $search . '%')->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->get());
          $drivers = Driver::with(['user'])->with(['depot'])->where('driver_name', 'like', '%' . $search . '%')->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        } else {
          $totalCount = count(Driver::whereUserId($user->id)->where('driver_name', 'like', '%' . $search . '%')->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->get());
          $drivers = Driver::with(['user'])->with(['depot'])->whereUserId($user->id)->where('driver_name', 'like', '%' . $search . '%')->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        }
      } else {
        if ($user->user_type == '0') {
          $totalCount = count(Driver::where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->get());
          $drivers = Driver::with(['user'])->with(['depot'])->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        } else {
          $totalCount = count(Driver::whereUserId($user->id)->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->get());
          $drivers = Driver::with(['user'])->with(['depot'])->whereUserId($user->id)->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        }
      }
      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $drivers], 200, [], JSON_NUMERIC_CHECK);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function createDriver (Request $request) {
    if (Auth::user()) {
      $user_id = Auth::user()->id;
      $driverInfo = $request->all();
      $validator = Validator::make($request->all(), [
        'driver_name' => 'required',
        'email' => 'required|email',
        'password' => 'required',
      ]);

      if ($validator->fails()) {
        return response()->json(['message'=>'Driver Info is not correct, Please check again','error' => $validator->errors()], 401);
      }
      try {
        $existing_driver = Driver::whereUserId($user_id)->where('driver_name', $driverInfo['driver_name'])->where('deleted_date', NULL)->get();
        if (count($existing_driver)) {
          return response()->json(['message' => 'Driver already exists'], 409);
        } else {
          $driverInfo['password'] = bcrypt($driverInfo['password']);
          $driverInfo['user_id'] = $user_id;
          $driver = Driver::create($driverInfo);
          // $driver = new Driver;
          // $driver->driver_name = $driverInfo['driver_name'];
          // $driver->user_id = $user_id;
          // $driver->save();
          return response()->json(['success' => 'success', 'data' => $driver], 200, [], JSON_NUMERIC_CHECK);
        }
      } catch (\Exception $e) {
        return response()->json(['message' => 'Cant add Driver', 'error' => $e], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function updateDriver (Request $request) {
    if (Auth::user()) {
      $driverInfo = $request['data'];
      $user_id = Auth::user()->id;
      $driverID = $request['conditions']['id'];
      try {
        $driver = Driver::find($driverID);
        $driverInfo['password'] = bcrypt($driverInfo['password']);
        $driver->update($driverInfo);
        // $driver->driver_name = $driverInfo['driver_name'];
        // $driver->user_id = $user_id;
        // $driver->save();
        return response()->json(['success' => 'success', 'data' => $driver], 200, [], JSON_NUMERIC_CHECK);
      } catch (\Exception $e) {
        return response()->json(['message' => 'Driver updating is failed', 'error' => $e], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function removeDriver (Request $request) {
    if (Auth::user()) {
      $driverID = $request['conditions']['id'];
      try {
        $driver = Driver::find($driverID);
        $driver->deleted_date = date("Y-m-d h:i:s");
        $driver->save();
        return response()->json(['success' => 'Driver Successfully Removed']);
      } catch (\Exception $e) {
        return response()->json(['error' => 'Driver Remove Failed']);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function getDriverDetails(Request $request) {
    $driver_id = $request->query()['id'];
    try {
      $driver = Driver::find($driver_id);
      return response()->json(['success'=>'success', 'driver' => $driver], 200, [], JSON_NUMERIC_CHECK);
    } catch (\Exception $e) {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function getMonthlyReportsByDriver (Request $request) {
    // if (Auth::guard('driver')->user()) {
      $start = $request['start'] ? $request['start'] : 0;
      $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
      $sortBy = $request['sortBy'] ? 'reports.'.$request['sortBy'] : 'reports.created_at';
      $desc = $request['descending'] ? 'DESC' : 'ASC';
      $fromDate = $request['fromDate'];
      $endDate = $request['endDate'];
      $isDateFilter = $request['conditions']['is_date_filter'];
      $driver_id = $request['conditions']['driver_id'];

      $reports = Report::with(['user'])->leftJoin('drivers', 'drivers.id', '=', 'reports.driver_id')->leftJoin('routes', 'routes.id', '=', 'reports.route_id');
      if ($isDateFilter) {
        $reports = $reports->where('reports.report_date', '>=', $fromDate)->where('reports.report_date', '<=', $endDate);
      }
      if ($request['conditions'] && isset($request['conditions']['filter'])) {
        $search = $request['conditions']['filter'];
        $reports = $reports->where(function($q) use ($search) {
          // $q->where('report_title', 'like', '%' . $search . '%')
          $q->orWhere('driver_name', 'like', '%' . $search . '%')
            ->orWhere('route_number', 'like', '%' . $search . '%');
        });
      }
      $reports = $reports->where('reports.driver_id', $driver_id);
      $reports = $reports->select('reports.id', 'reports.driver_id', 'reports.route_id', 'reports.report_title', 'reports.report_date', 'reports.report_no', 'drivers.driver_name', 'routes.route_number', 'is_group', 'reports.created_at', 'reports.user_id')->orderBy($sortBy, $desc);
      $totalCount = count($reports->get());
      $reports = $reports->skip($start)->take($numPerPage)->get();

      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $reports], 200, [], JSON_NUMERIC_CHECK);
      }
    // } else {
    //   return response()->json(['failed'=>'failed'], 401);
    // }
  }
}
