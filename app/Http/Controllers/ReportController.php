<?php

namespace App\Http\Controllers;

use App\Depot;
use Illuminate\Http\Request;
// use Auth;
use Validator;
use Response;
use Illuminate\Support\Facades\Input;
use App\Report;
use App\Driver;
use App\Route;
use App\User;
use Illuminate\Support\Facades\Auth;
use Mockery\Undefined;

class ReportController extends Controller
{
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
  public function createSingleRecord (Request $request) {
    if (Auth::user()) {
      $reportInfo = $request['data'];
      $user_id = Auth::user()->id;
      try {
        $lastReportNo = Report::where('report_date', $reportInfo['report_date'])->select('report_no')->groupBy('report_no')->orderBy('report_no', 'DESC')->get();
        if (count($lastReportNo)) {
          $lastNo = (int)explode("-", $lastReportNo[0])[3]+1;
        } else {
          $lastNo = 1;
        }
        $report_no = $reportInfo['report_date'] . '-' . ($lastNo);
        
        $report = new Report;
        $report->user_id = $user_id;
        $report->driver_id = $reportInfo['driver_id'];
        $report->route_id = $reportInfo['route_id'];
        $report->report_date = $reportInfo['report_date'];
        $report->report_no = $report_no;
        $report->is_group = 0;
        $report->save();

        // $reportData = [];
        return response()->json(['success' => 'Report is successfully created'], 200, [], JSON_NUMERIC_CHECK);
      } catch (\Exception $e) {
        return response()->json(['message' => 'Report create failed'], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function updateSingleRecord (Request $request) {
    if (Auth::user()) {
      $user_id = Auth::user()->id;
      $reportInfo = $request['data'];
      $reportId = $request['conditions']['id'];
      try {
        $lastReportNo = Report::where('report_date', $reportInfo['report_date'])->select('report_no')->groupBy('report_no')->orderBy('report_no', 'DESC')->get();
        if (count($lastReportNo)) {
          $lastNo = (int)explode("-", $lastReportNo[0])[3]+1;
        } else {
          $lastNo = 1;
        }
        $report_no = $reportInfo['report_date'] . '-' . ($lastNo);

        $report = Report::find($reportId);
        $report->user_id = $user_id;
        $report->driver_id = $reportInfo['driver_id'];
        $report->route_id = $reportInfo['route_id'];
        $report->report_date = $reportInfo['report_date'];
        $report->report_no = $report_no;
        $report->is_group = 0;
        // $report->report_title = $reportInfo->report_title?$reportInfo->report_title:'';
        $report->save();
        return response()->json(['success' => 'success', 'data' => $report], 200, [], JSON_NUMERIC_CHECK);
      } catch (\Exception $e) {
        return response()->json(['message' => 'Single Record updating is failed', 'error' => $e], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function removeSingleRecord (Request $request) {
    if (Auth::user()) {
      $user_id = Auth::user()->id;
      try {
        Report::whereUserId($user_id)->where('id', $request['conditions']['id'])->delete();
        return response()->json(['success' => 'Single Record Successfully Removed'], 200, [], JSON_NUMERIC_CHECK);
      } catch (\Exception $e) {
        return response()->json(['error' => 'Single Record Remove Failed'], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function createReport (Request $request) {
    if (Auth::user()) {
      $reportInfo = $request['data'];
      $user_id = Auth::user()->id;
      try {
        $lastReport = Report::whereUserId($user_id)->where('report_date', $reportInfo['report_date'])->where('is_group', 1)->get();
        if (count($lastReport)) {
          return response()->json(['message' => "Today's Report is already created"], 500);
        } else {
          $lastReportNo = Report::where('report_date', $reportInfo['report_date'])->select('report_no')->groupBy('report_no')->orderBy('report_no', 'DESC')->get();
          if (count($lastReportNo)) {
            $lastNo = (int)explode("-", $lastReportNo[0])[3]+1;
          } else {
            $lastNo = 1;
          }
          $report_no = $reportInfo['report_date'] . '-' . $lastNo;
          foreach($reportInfo['report_data'] as $data) {
            $report = new Report;
            $report->user_id = $user_id;
            $report->driver_id = $data['driver_id'];
            $report->route_id = $data['route_id'];
            // $report->report_title = $reportInfo['report_title']?$reportInfo['report_title']:'';
            $report->report_date = $reportInfo['report_date'];
            $report->stops = $data['stops'];
            $report->report_no = $report_no;
            $report->is_group = 1;
            $report->save();
          }
          // $reportData = [];
          return response()->json(['success' => 'Report is successfully created'], 200, [], JSON_NUMERIC_CHECK);
        }
      } catch (\Exception $e) {
        return response()->json(['message' => 'Report create failed'], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  
  public function updateReport (Request $request) {
    if (Auth::user()) {
      $user_id = Auth::user()->id;
      $reportInfo = $request['data'];
      $oldReportNo = $request['conditions']['report_no'];
      try {
        $lastReport = Report::whereUserId($user_id)->where('report_date', $reportInfo['report_date'])->where('report_no', '<>', $oldReportNo)->where('is_group', 1)->get();
        if (count($lastReport)) {
          return response()->json(['message' =>  $reportInfo['report_date']." Report is already created"], 500);
        } else {
          $lastReportNo = Report::where('report_date', $reportInfo['report_date'])->select('report_no')->groupBy('report_no')->orderBy('report_no', 'DESC')->get();
          if (count($lastReportNo)) {
            $lastNo = (int)explode("-", $lastReportNo[0])[3]+1;
          } else {
            $lastNo = 1;
          }
          $report_no = $reportInfo['report_date'] . '-' . $lastNo;
          foreach ($reportInfo['report_data'] as $data) {
            if (array_key_exists('id', $data)) {
              $report = Report::find($data['id']);
            } else {
              $report = new Report;
            }
            $report->user_id = $user_id;
            $report->driver_id = $data['driver_id'];
            $report->route_id = $data['route_id'];
            $report->report_date = $reportInfo['report_date'];
            $report->stops = $data['stops'];
            $report->report_no = $report_no;
            $report->is_group = 1;
            $report->save();
          }
          return response()->json(['success' => 'success'], 200, [], JSON_NUMERIC_CHECK);
        }
      } catch (\Exception $e) {
        return response()->json(['message' => 'Report updating is failed', 'error' => $e], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  
  public function removeReport (Request $request) {
    if (Auth::user()) {
      $user_id = Auth::user()->id;
      try {
        Report::whereUserId($user_id)->where('report_no', $request['conditions']['report_no'])->delete();
        return response()->json(['success' => 'Report Successfully Removed'], 200, [], JSON_NUMERIC_CHECK);
      } catch (\Exception $e) {
        return response()->json(['error' => 'Report Remove Failed'], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  
  public function getRegularRoutes(Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      if ($user->user_type == '0') {
        $routes = Route::where('route_type', 0)->where('deleted_date', NULL)->get();
      } else {
        if ($user->user_type == '1') {
          $depot_id = $request->query()['depot_id']?$request->query()['depot_id']:"";
          $routes = Route::whereUserId($user->id)->where('depot_id', $depot_id)->where('route_type', 0)->where('deleted_date', NULL)->get();
        } else {
          $routes = Route::where(function($q) use ($user) {
            $q->whereUserId($user->id)->orWhere(function($q2) use ($user) {
              $q2->where('user_id', $user->parent_id)
                ->where('depot_id', $user->depot_id);
            });
          })->where('route_type', 0)->where('deleted_date', NULL)->get();
        }
        // $routes = Route::whereUserId($user->id)->where('route_type', 0)->where('deleted_date', NULL)->get();
      }
      return response()->json(['success'=>'success', 'data' => $routes], 200, [], JSON_NUMERIC_CHECK);
    } else {
      return response()->json(['failed'=>'failed'], 404);
    }
  }
  public function getExtraRoutes(Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      if ($user->user_type == '0') {
        $routes = Route::where('route_type', 1)->get();
      } else {
        if ($user->user_type == '1') {
          $depot_id = $request->query()['depot_id']?$request->query()['depot_id']:"";
          $routes = Route::whereUserId($user->id)->where('depot_id', $depot_id)->where('route_type', 1)->get();
        } else {
          $routes = Route::where(function($q) use ($user) {
            $q->whereUserId($user->id)->orWhere(function($q2) use ($user) {
              $q2->where('user_id', $user->parent_id)
                ->where('depot_id', $user->depot_id);
            });
          })->where('route_type', 1)->get();
        }
        // $routes = Route::whereUserId($user->id)->where('route_type', 1)->get();
      }
      return response()->json(['success'=>'success', 'data' => $routes], 200, [], JSON_NUMERIC_CHECK);
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function getDriverAll(Request $request) {
    if (Auth::user()) {
      $report_datetime = $request->query()['report_datetime'];
      if (!isset($$report_datetime)) $report_datetime = date('Y-m-d h:i:s');
      $user = Auth::user();
      if ($user->user_type == '0') {
        $drivers = Driver::where('deleted_date', NULL)->orWhere('deleted_date', '>', $report_datetime)->get();
      } else {
        $drivers = Driver::whereUserId($user->id)->where('deleted_date', NULL)->orWhere('deleted_date', '>', $report_datetime)->get();
      }
      return response()->json(['success'=>'success', 'data' => $drivers], 200, [], JSON_NUMERIC_CHECK);
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function getReportDetails (Request $request) {
    if (Auth::user()) {
      $user_id = Auth::user()->id;
      $reportNo = $request->query()['reportNo'];
      try {
        $reports = Report::with(['driver', 'route'])->where('report_no', $reportNo)->get();
        return response()->json(['success' => 'success', 'data' => $reports], 200, [], JSON_NUMERIC_CHECK);
      } catch (\Exception $e) {
        return response()->json(['error' => 'Report with this id is not exist'], 404);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function getReports(Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      $start = $request['start'] ? $request['start'] : 0;
      $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
      $sortBy = $request['sortBy'] ? 'reports.'.$request['sortBy'] : 'reports.report_date';
      $desc = $request['descending'] ? 'DESC' : 'ASC';
      $fromDate = $request['fromDate'];
      $endDate = $request['endDate'];
      $isDateFilter = $request['conditions']['is_date_filter'];
      
      $users = User::where('parent_id', $user->id)->select('id')->get();
      $userIDs = [];
      array_push($userIDs, $user->id);
      for ($i = 0; $i<count($users); $i++) {
        array_push($userIDs, $users[$i]->id);
      }

      $reports = Report::with(['user']);
      if ($isDateFilter) {
        $reports = $reports->where('report_date', '>=', $fromDate)->where('report_date', '<=', $endDate);
      }
      // if ($user->user_type != 0) {
      //   $reports = $reports->whereUserId($user->id);
      // }
      if ($user->user_type != '0') {
        if ($user->user_type == '1') {
          $reports = $reports->whereIn('user_id', $userIDs);
        } else {
          $reports = $reports->where('user_id', $user->id);
        }
      }

      $reports = $reports->select(['id', 'report_date', 'report_no', 'user_id', 'driver_id', 'route_id', 'is_group', 'created_at'])->groupBy('report_no')->orderBy($sortBy, $desc);

      $totalCount = count($reports->get());
      $reports = $reports->skip($start)->take($numPerPage)->get();

      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $reports], 200, [], JSON_NUMERIC_CHECK);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function getReportsAll(Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      // $start = $request['start'] ? $request['start'] : 0;
      // $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
      $sortBy = $request['sortBy'] ? 'reports.'.$request['sortBy'] : 'reports.report_date';
      $desc = $request['descending'] ? 'DESC' : 'ASC';
      $fromDate = $request['fromDate'];
      $endDate = $request['endDate'];
      $isDateFilter = $request['conditions']['is_date_filter'];

      $reports = Report::with(['user']);
      if ($user->user_type != 0) {
        $reports = $reports->whereUserId($user->id);
      }
      if ($request['conditions'] && $request['conditions']['filter']) {
        $search = $request['conditions']['filter'];
        $reports = $reports->where('report_date', 'like', '%' . $search . '%');
      }
      if ($isDateFilter) {
        $reports = $reports->where('report_date', '>=', $fromDate)->where('report_date', '<=', $endDate);
      }
      $reports = $reports->select(['id', 'report_date', 'report_no', 'user_id', 'driver_id', 'route_id', 'is_group', 'created_at'])->groupBy('report_no')->orderBy($sortBy, 'DESC')->get();

      $totalCount = count($reports);
      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $reports], 200, [], JSON_NUMERIC_CHECK);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function getMonthlyReports (Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      $start = $request['start'] ? $request['start'] : 0;
      $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
      $sortBy = $request['sortBy'] ? 'reports.'.$request['sortBy'] : 'reports.created_at';
      $desc = $request['descending'] ? 'DESC' : 'ASC';
      $fromDate = $request['fromDate'];
      $endDate = $request['endDate'];
      $isDateFilter = $request['conditions']['is_date_filter'];

      $users = User::where('parent_id', $user->id)->select('id')->get();
      $userIDs = [];
      array_push($userIDs, $user->id);
      for ($i = 0; $i<count($users); $i++) {
        array_push($userIDs, $users[$i]->id);
      }

      $reports = Report::with(['user'])
                ->leftJoin('drivers', 'drivers.id', '=', 'reports.driver_id')
                ->leftJoin('routes', 'routes.id', '=', 'reports.route_id')
                ->leftJoin('depots', 'depots.id', '=', 'routes.depot_id');
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
      if ($user->user_type != '0') {
        if ($user->user_type == '1') {
          $reports = $reports->whereIn('reports.user_id', $userIDs);
        } else {
          $reports = $reports->where('reports.user_id', $user->id);
        }
      }
      $reports = $reports->select('reports.id', 'reports.driver_id', 'reports.route_id', 'reports.report_title', 'reports.report_date', 'reports.report_no', 'drivers.driver_name', 'routes.route_number', 'is_group', 'pay_type', 'vat_percentage', 'pay_amount', 'stops', 'reports.created_at', 'reports.user_id', 'depots.depot_location')->orderBy($sortBy, $desc);
      $totalCount = count($reports->get());
      $reports = $reports->skip($start)->take($numPerPage)->get();

      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $reports], 200, [], JSON_NUMERIC_CHECK);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function getMonthlyAll (Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      $sortBy = $request['sortBy'] ? 'reports.'.$request['sortBy'] : 'reports.created_at';
      $desc = $request['descending'] ? 'DESC' : 'ASC';
      $fromDate = $request['fromDate'];
      $endDate = $request['endDate'];

      $isDateFilter = $request['conditions']['is_date_filter'];

      $users = User::where('parent_id', $user->id)->select('id')->get();
      $userIDs = [];
      array_push($userIDs, $user->id);
      for ($i = 0; $i<count($users); $i++) {
        array_push($userIDs, $users[$i]->id);
      }

      $reports = Report::with(['user'])
                ->leftJoin('drivers', 'drivers.id', '=', 'reports.driver_id')
                ->leftJoin('routes', 'routes.id', '=', 'reports.route_id')
                ->leftJoin('depots', 'depots.id', '=', 'routes.depot_id');
      // if ($user->user_type != 0) {
      //   $reports = $reports->whereUserId($user->id);
      // }
      
      if ($user->user_type != '0') {
        if ($user->user_type == '1') {
          $reports = $reports->whereIn('reports.user_id', $userIDs);
        } else {
          $reports = $reports->where('reports.user_id', $user->id);
        }
      }
      if ($isDateFilter) {
        $reports = $reports->where('reports.report_date', '>=', $fromDate)->where('reports.report_date', '<=', $endDate);
      }
      if ($request['conditions'] && array_key_exists('filter', $request['conditions'])) {
        $search = $request['conditions']['filter'];
        $reports = $reports->where(function($q) use ($search) {
          $q->orWhere('driver_name', 'like', '%' . $search . '%')
            ->orWhere('route_number', 'like', '%' . $search . '%');
        });
      }
      $reports = $reports->select('reports.id', 'reports.driver_id', 'reports.route_id', 'reports.report_title', 'reports.report_date', 'reports.report_no', 'drivers.driver_name', 'routes.route_number', 'is_group', 'stops', 'reports.created_at', 'reports.user_id', 'depots.depot_location')->orderBy($sortBy, 'DESC')->get();

      $totalCount = count($reports);
      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $reports], 200, [], JSON_NUMERIC_CHECK);
      }
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
          $drivers = Driver::with(['user'])->where('driver_name', 'like', '%' . $search . '%')->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        } else {
          $totalCount = count(Driver::whereUserId($user->id)->where('driver_name', 'like', '%' . $search . '%')->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->get());
          $drivers = Driver::with(['user'])->whereUserId($user->id)->where('driver_name', 'like', '%' . $search . '%')->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        }
      } else {
        if ($user->user_type == '0') {
          $totalCount = count(Driver::where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->get());
          $drivers = Driver::with(['user'])->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        } else {
          $totalCount = count(Driver::whereUserId($user->id)->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->get());
          $drivers = Driver::with(['user'])->whereUserId($user->id)->where('deleted_date', NULL)->where('driver_name', '<>', 'RNC')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
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
      $driverInfo = $request['data'];
      try {
        $existing_driver = Driver::whereUserId($user_id)->where('driver_name', $driverInfo['driver_name'])->where('deleted_date', NULL)->get();
        if (count($existing_driver)) {
          return response()->json(['message' => 'Driver already exists'], 409);
        } else {
          $driver = new Driver;
          $driver->driver_name = $driverInfo['driver_name'];
          $driver->user_id = $user_id;
          $driver->save();
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
        $driver->driver_name = $driverInfo['driver_name'];
        $driver->user_id = $user_id;
        $driver->save();
        return response()->json(['success' => 'success', 'data' => $driver], 200, [], JSON_NUMERIC_CHECK);
      } catch (\Exception $e) {
        return response()->json(['message' => 'Report updating is failed', 'error' => $e], 500);
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
        return response()->json(['success' => 'Report Successfully Removed']);
      } catch (\Exception $e) {
        return response()->json(['error' => 'Report Remove Failed']);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  
  public function getRoutes (Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      $start = $request['start'] ? $request['start'] : 0;
      $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
      $sortBy = $request['sortBy'] ? $request['sortBy'] : 'route_number';
      $desc = $request['descending'] ? 'DESC' : 'ASC';

      if ($request['conditions'] && $request['conditions']['filter']) {
        $search = $request['conditions']['filter'];
        if ($user->user_type == '0') {
          $totalCount = count(Route::where('route_number', 'like', '%' . $search . '%')->where('deleted_date', NULL)->get());
          $routes = Route::with(['user'])->with(['depot'])->where('route_number', 'like', '%' . $search . '%')->where('deleted_date', NULL)->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        } else {
          $totalCount = count(Route::whereUserId($user->id)->where('route_number', 'like', '%' . $search . '%')->where('deleted_date', NULL)->get());
          $routes = Route::with(['user'])->with(['depot'])->whereUserId($user->id)->where('route_number', 'like', '%' . $search . '%')->where('deleted_date', NULL)->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        }
      } else {
        if ($user->user_type == '0') {
          $totalCount = count(Route::where('deleted_date', NULL)->get());
          $routes = Route::with(['user'])->with(['depot'])->where('deleted_date', NULL)->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        } else {
          $totalCount = count(Route::whereUserId($user->id)->where('deleted_date', NULL)->get());
          $routes = Route::with(['user'])->with(['depot'])->whereUserId($user->id)->where('deleted_date', NULL)->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        }
      }
      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $routes], 200, [], JSON_NUMERIC_CHECK);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function createRoute (Request $request) {
    if (Auth::user()) {
      $user_id = Auth::user()->id;
      $routeInfo = $request['data'];
      try {
        $route = Route::whereUserId($user_id)->where('route_number', $routeInfo['route_number'])->where('route_type', $routeInfo['route_type'])->where('deleted_date', NULL)->get();
        if (count($route)) {
          return response()->json(['message' => 'Route already exists'], 409);
        } else {
          $route = new Route;
          $route->route_number = $routeInfo['route_number'];
          $route->depot_id = $routeInfo['depot_id'];
          $route->route_type = $routeInfo['route_type'];
          $route->user_id = $user_id;
          $route->save();
          return response()->json(['success' => 'success', 'data' => $route], 200, [], JSON_NUMERIC_CHECK);
        }
      } catch (\Exception $e) {
        return response()->json(['message' => 'Route creation is failed', 'error' => $e], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function updateRoute (Request $request) {
    if (Auth::user()) {
      $routeInfo = $request['data'];
      $user_id = Auth::user()->id;
      $routeID = $request['conditions']['id'];
      try {
        $route = Route::find($routeID);
        $route->route_number = $routeInfo['route_number'];
        $route->depot_id = $routeInfo['depot_id'];
        $route->user_id = $user_id;
        $route->save();
        return response()->json(['success' => 'success', 'data' => $route], 200, [], JSON_NUMERIC_CHECK);
      } catch (\Exception $e) {
        return response()->json(['message' => 'Route updating is failed', 'error' => $e], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function removeRoute (Request $request) {
    if (Auth::user()) {
      $routeID = $request['conditions']['id'];
      try {
        $route = Route::find($routeID);
        $route->deleted_date = date("Y-m-d h:i:s");
        $route->save();
        return response()->json(['success' => 'Route Successfully Removed']);
      } catch (\Exception $e) {
        return response()->json(['error' => 'Route Remove Failed']);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function getDepotAll(Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      if ($user->user_type == '0') {
        $depots = Depot::all();
      } else {
        $depots = Depot::whereUserId($user->id)->get();
      }
      return response()->json(['success'=>'success', 'data' => $depots], 200, [], JSON_NUMERIC_CHECK);
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function getDepots (Request $request) {
    if (Auth::user()) {
      $user = Auth::user();
      $start = $request['start'] ? $request['start'] : 0;
      $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
      $sortBy = $request['sortBy'] ? $request['sortBy'] : 'depot_location';
      $desc = $request['descending'] ? 'DESC' : 'ASC';

      if ($request['conditions'] && $request['conditions']['filter']) {
        $search = $request['conditions']['filter'];
        if ($user->user_type == '0') {
          $totalCount = count(Depot::where('depot_location', 'like', '%' . $search . '%')->get());
          $depots = Depot::with(['user'])->where('depot_location', 'like', '%' . $search . '%')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        } else {
          $totalCount = count(Depot::whereUserId($user->id)->where('depot_location', 'like', '%' . $search . '%')->get());
          $depots = Depot::with(['user'])->whereUserId($user->id)->where('depot_location', 'like', '%' . $search . '%')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        }
      } else {
        if ($user->user_type == '0') {
          $totalCount = count(Depot::all());
          $depots = Depot::with(['user'])->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        } else {
          $totalCount = count(Depot::whereUserId($user->id)->get());
          $depots = Depot::with(['user'])->whereUserId($user->id)->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
        }
      }
      if ($totalCount == 0) {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200, [], JSON_NUMERIC_CHECK);
      } else {
        return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $depots], 200, [], JSON_NUMERIC_CHECK);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }

  public function createDepot (Request $request) {
    if (Auth::user()) {
      $user_id = Auth::user()->id;
      $depot_info = $request['data'];
      try {
        $existing_depot = Depot::whereUserId($user_id)->where('depot_location', $depot_info['depot_location'])->get();
        if (count($existing_depot)) {
          return response()->json(['message' => 'Depot already exists'], 409);
        } else {
          $depot_info['user_id'] = $user_id;
          $depot = Depot::create($depot_info);
          return response()->json(['ddd'=>$depot], 200);
          return response()->json(['success' => 'success', 'data' => $depot], 200, [], JSON_NUMERIC_CHECK);
        }
      } catch (\Exception $e) {
        return response()->json(['message' => 'Cant add Depot', 'error' => $e], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function updateDepot (Request $request) {
    if (Auth::user()) {
      $depoInfo = $request['data'];
      $user_id = Auth::user()->id;
      $depotID = $request['conditions']['id'];
      try {
        $depot = Depot::find($depotID);
        $depot->depot_location = $depoInfo['depot_location'];
        $depot->user_id = $user_id;
        $depot->save();
        return response()->json(['success' => 'success', 'data' => $depot], 200, [], JSON_NUMERIC_CHECK);
      } catch (\Exception $e) {
        return response()->json(['message' => 'Depot updating is failed', 'error' => $e], 500);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
  public function removeDepot (Request $request) {
    if (Auth::user()) {
      $depotID = $request['conditions']['id'];
      try {
        Depot::findOrFail($depotID)->delete();
        return response()->json(['success' => 'Depot Successfully Removed']);
      } catch (\Exception $e) {
        return response()->json(['error' => 'Depot Remove Failed']);
      }
    } else {
      return response()->json(['failed'=>'failed'], 401);
    }
  }
}
