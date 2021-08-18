<?php

use App\Models\Employee;
use App\Http\Controllers\EmployeeApiController;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Get all employees data from DB
Route::get('/employees', [EmployeeApiController::class, 'index']);

// Post a new employee
Route::post('/employees', [EmployeeApiController::class, 'store']);

// Update an employee by id
Route::put('/employees/{employee}', [EmployeeApiController::class, 'update']);

// Delete an employee by id
Route::delete('/employees/{employee}', [EmployeeApiController::class, 'destroy']);

Route::get('/employees/{employee}', [EmployeeApiController::class, 'getById']);
    