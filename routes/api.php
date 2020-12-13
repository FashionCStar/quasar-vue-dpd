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
//Route::post('confirmUser', 'UserController@confirmUser')->middleware('auth:api');
Route::group(['middleware' => 'auth:api'], function () {
  Route::post('/registerUser', 'UserController@register');
  Route::post('/updateUser', 'UserController@updateUser');
  Route::post('/removeUser', 'UserController@removeUser');
  Route::post('/confirmUser', 'UserController@confirmUser');
  Route::get('/my-profile', 'UserController@myProfile');
  Route::post('/update-profile', 'UserController@updateProfile');
  Route::post('/getUsers', 'UserController@getUsers');
  Route::get('/getUserDetails', 'UserController@getUserDetails');
  Route::get('/getRegularRoutes', 'ReportController@getRegularRoutes');
  Route::get('/getExtraRoutes', 'ReportController@getExtraRoutes');
  Route::get('/getCourierList', 'ReportController@getCourierAll');
  Route::post('/getCouriers', 'ReportController@getCouriers');
  Route::post('/createCourier', 'ReportController@createCourier');
  Route::post('/updateCourier', 'ReportController@updateCourier');
  Route::post('/removeCourier', 'ReportController@removeCourier');
  Route::post('/getRoutes', 'ReportController@getRoutes');
  Route::get('/getFDNumberByID', 'ReportController@getFDNumberByID');
  Route::post('/createRoute', 'ReportController@createRoute');
  Route::post('/updateRoute', 'ReportController@updateRoute');
  Route::post('/removeRoute', 'ReportController@removeRoute');
  Route::post('/getReports', 'ReportController@getReports');
  Route::post('/getReportsAll', 'ReportController@getReportsAll');
  // Route::post('/getMonthlyReports', 'ReportController@getMonthlyReports');
  Route::post('/getMonthlyReports', 'ReportController@getMonthlyAll');
  Route::post('/getMonthlyReportsAll', 'ReportController@getMonthlyAll');
  Route::post('/createReport', 'ReportController@createReport');
  Route::get('/getReportDetails', 'ReportController@getReportDetails');
  Route::post('/updateReport', 'ReportController@updateReport');
  Route::post('/removeReport', 'ReportController@removeReport');
  Route::post('/createSingleRecord', 'ReportController@createSingleRecord');
  Route::post('/updateSingleRecord', 'ReportController@updateSingleRecord');
  Route::get('/getRNCID', 'ReportController@getRNCID');
});
