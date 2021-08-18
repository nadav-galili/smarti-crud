import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { EmployeeModel } from './employee-dashboard.model';
import { ApiService } from '../shared/api.service';



@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
formValue !:FormGroup;
employeeModelObj : EmployeeModel =new EmployeeModel();
 employeeData !: any;
 showAdd !: boolean;
 showUpdate !:boolean;


 
  constructor(private formbuilder: FormBuilder ,
    private api : ApiService) { }



  // bind parameters for the form
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      first_name:[''],
      last_name:[''],
      job_title:[''],
      salary:['']
    })
    this.getAllEmployee();
  }

  //All values will be appended to this object 
 postEmployeeDetails(){
   this.employeeModelObj.first_name=this.formValue.value.first_name;
   this.employeeModelObj.last_name=this.formValue.value.last_name;
   this.employeeModelObj.job_title=this.formValue.value.job_title;
   this.employeeModelObj.salary=this.formValue.value.salary;


   //Adding a new employee
   this.api.postEmployee(this.employeeModelObj)
   .subscribe(res=>{
     console.log(res);
     alert("Employee Added Succesfully")
      let ref=document.getElementById('cancel')
      ref?.click();
     this.formValue.reset();
      this.getAllEmployee();
   },
   err=>{
     alert("Something went wrong");
   })
 }

 clickAddEmployee(){
  this.formValue.reset();
  this.showAdd =true;
  this.showUpdate= false;

}

 //Fetching all employees data
 getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
this.employeeData=res;
  })
}

//Deleting an employee by id
deleteEmployee(row : any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee Deleted");
    this.getAllEmployee();
  })
}

//Method for editing an employee
onEdit(row : any){
  this.showAdd =false;
  this.showUpdate= true;
  this.employeeModelObj.id=row.id;
  this.formValue.controls['first_name'].setValue(row.first_name);
  this.formValue.controls['last_name'].setValue(row.last_name);
  this.formValue.controls['job_title'].setValue(row.job_title);
  this.formValue.controls['salary'].setValue(row.salary);
}

updateEmployeeDetails(){
  this.employeeModelObj.first_name=this.formValue.value.first_name;
  this.employeeModelObj.last_name=this.formValue.value.last_name;
  this.employeeModelObj.job_title=this.formValue.value.job_title;
  this.employeeModelObj.salary=this.formValue.value.salary;

  this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
  .subscribe(res=>{
    alert("Updated Succesfully");
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
  })
}



}