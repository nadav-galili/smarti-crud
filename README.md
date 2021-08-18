# smarti-crud

![Caption](https://github.com/nadav-galili/smarti-crud/blob/main/laravel/resources/images/smarti.JPG)

# About
This project was built by using Laravel Framework 8.54.0 as the backend
and Angular CLI: 12.2.1 as the frontend.


# Steps and installiation during the project in laravel

installed a new laravel project with the command:
$ composer create-project laravel/laravel laravel

* in the .env file, 
changed the name of the database to:laravel_api

* in the laravel folder: php artisan migrate

* make a new model called employee- 
php artisan make:model Employee -m


* after we defined the fields for the database in the model file, 
run- 

php artisan migrate again

* run:php artisan tinker. 

* to make a controller,  run-

php artisan make:controller EmployeeApiController




# initializing angular

* you need to run npm init to extract all dependencies from node_modules


## I installed the angular project using these steps
* npm install -g @angular/cli

* ng new AngularCRUD

* ng serve




after deployement
* ng g c EmployeeDashboard
* ng g s shared/api

# Dependencies
## List of laravel dependencies can be found here
![Caption](https://github.com/nadav-galili/smarti-crud/blob/main/laravel/resources/images/laravel_dependencies.JPG)
## List of angular dependencies can be found here
![Caption](https://github.com/nadav-galili/smarti-crud/blob/main/laravel/resources/images/angular_dependencies.JPG)



### Additional dependencies:

* bootstrap
* font awesome cdn

*You can find the SQL DB file in this repo ("Employees.sql")

## Project Images

* Adding a new employee
![Caption](https://github.com/nadav-galili/smarti-crud/blob/main/laravel/resources/images/add.JPG)

* Editing an existing employee
![Caption](https://github.com/nadav-galili/smarti-crud/blob/main/laravel/resources/images/edit.JPG)
* Deleting an employee
![Caption](https://github.com/nadav-galili/smarti-crud/blob/main/laravel/resources/images/delete.JPG)

