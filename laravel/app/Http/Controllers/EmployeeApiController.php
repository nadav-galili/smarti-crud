<?php

namespace App\Http\Controllers;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeApiController extends Controller
{

    // Get all employees data
    public function index()
    {
        return Employee::all();
    }

    // Post a new employee
    public function store(){
        request()->validate([
            'first_name'=>'required',
            'last_name'=>'required',
            'job_title'=>'required',
            'salary'=>'required',
        ]);
    
    
        return Employee::create([
            'first_name'=>request('first_name'),
            'last_name'=>request('last_name'),
            'job_title'=>request('job_title'),
            'salary'=>request('salary')
        ]);
    }

    public function update(Employee $employee){
        request()->validate([
            'first_name'=>'required',
            'last_name'=>'required',
            'job_title'=>'required',
            'salary'=>'required',
        ]);
       $success= $employee->update([
            'first_name'=>request('first_name'),
            'last_name'=>request('last_name'),
            'job_title'=>request('job_title'),
            'salary'=>request('salary')
        ]);
    
        return [
            'success'=>$success];
    }

    public function destroy(Employee $employee){
        $success=$employee->delete();
    
        return [
            'success'=>$success
        ];
    }
}