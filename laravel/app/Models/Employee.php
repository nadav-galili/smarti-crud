<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    // allow mass assigment to the model
    protected $fillable=[
        'first_name', 'last_name', 'job_title','salary'
    ];
}