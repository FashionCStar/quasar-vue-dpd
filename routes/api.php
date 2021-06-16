<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Auth::routes(['verify' => true]);

use App\Http\Controllers\ReportController;

Route::get('login', ['as' => 'login', 'uses' => 'UserController@login']);
Route::post('loginUser', 'UserController@login');
Route::post('register', 'UserController@register');
Route::post('validateUser', 'UserController@validateUser');
Route::post('sendVerifyEmail', 'UserController@sendVerifyEmail');
Route::post('sendVerifyPhone', 'UserController@sendVerifyPhone');
Route::post('uploadUserAvatar', 'UserController@uploadUserAvatar');
Route::post('forgotPassword', 'ResetPasswordController@sendPasswordResetEmail');
Route::post('resetPassword', 'ResetPasswordController@resetPassword');
Route::post('loginDriver', 'DriverController@login');
//Route::post('confirmUser', 'UserController@confirmUser')->middleware('auth:api');
Route::post('/getMonthlyReportsByDriver', 'DriverController@getMonthlyReportsByDriver');
// Route::group(['middleware' => 'auth:driver'], function () {
// });

Route::post('/getLocatorResults', 'LocatorController@getLocatorResults');
Route::post('/convertbng2latlong', 'LocatorController@convertbng2latlong');
Route::post('/getAreaData', 'LocatorController@getAreaData');

Route::group(['middleware' => 'auth:api'], function () {
  Route::post('/registerUser', 'UserController@register');
  Route::post('/updateUser', 'UserController@updateUser');
  Route::post('/removeUser', 'UserController@removeUser');
  Route::post('/confirmUser', 'UserController@confirmUser');
  Route::get('/my-profile', 'UserController@myProfile');
  Route::post('/update-profile', 'UserController@updateProfile');
  Route::post('/getClients', 'UserController@getClients');
  Route::post('/getUsers', 'UserController@getUsers');
  Route::get('/getClientDetails', 'UserController@getClientDetails');
  Route::get('/getUserDetails', 'UserController@getUserDetails');
  Route::get('/getRegularRoutes', 'ReportController@getRegularRoutes');
  Route::get('/getExtraRoutes', 'ReportController@getExtraRoutes');
  Route::get('/getDriverList', 'DriverController@getDriverAll');
  Route::post('/getDrivers', 'DriverController@getDrivers');
  Route::get('/getDriverDetails', 'DriverController@getDriverDetails');
  Route::post('/createDriver', 'DriverController@createDriver');
  Route::post('/updateDriver', 'DriverController@updateDriver');
  Route::post('/removeDriver', 'DriverController@removeDriver');
  Route::post('/getRoutes', 'ReportController@getRoutes');
  Route::get('/getFDNumberByID', 'ReportController@getFDNumberByID');
  Route::post('/createRoute', 'ReportController@createRoute');
  Route::post('/updateRoute', 'ReportController@updateRoute');
  Route::post('/removeRoute', 'ReportController@removeRoute');
  Route::get('/getDepotAll', 'ReportController@getDepotAll');
  Route::post('/getDepots', 'ReportController@getDepots');
  Route::post('/createDepot', 'ReportController@createDepot');
  Route::post('/updateDepot', 'ReportController@updateDepot');
  Route::post('/removeDepot', 'ReportController@removeDepot');
  Route::post('/getReports', 'ReportController@getReports');
  Route::post('/getReportsAll', 'ReportController@getReportsAll');
  Route::post('/getMonthlyReports', 'ReportController@getMonthlyReports');
  Route::post('/getMonthlyReportsAll', 'ReportController@getMonthlyAll');
  Route::post('/createReport', 'ReportController@createReport');
  Route::get('/getReportDetails', 'ReportController@getReportDetails');
  Route::post('/updateReport', 'ReportController@updateReport');
  Route::post('/removeReport', 'ReportController@removeReport');
  Route::post('/createSingleRecord', 'ReportController@createSingleRecord');
  Route::post('/updateSingleRecord', 'ReportController@updateSingleRecord');
  Route::post('/removeSingleRecord', 'ReportController@removeSingleRecord');
  Route::get('/getRNCID', 'DriverController@getRNCID');
  
  Route::post('/activeUser', 'UserController@activeUser');
});
