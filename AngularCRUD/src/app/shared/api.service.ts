import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
// import { Observable } from 'rxjs';

export interface Employee {
  id: string;
  first_name: string;
  last_name:string;
  job_title :string;
  salary: number;
 
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  // Add a new employee
  postEmployee(data : any){
    return this.http.post<any>("http://localhost/smarti-crud/laravel/public/api/employees", data)
    .pipe(map((res:any)=>{
      return res;
    }))
    }

//Get all employees details
  getEmployee(){
    return this.http.get<any>("http://localhost/smarti-crud/laravel/public/api/employees")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //update employee by id
  updateEmployee(data :any, id : number){
    return this.http.put<any>("http://localhost/smarti-crud/laravel/public/api/employees/" + id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // delete employee by id
   deleteEmployee(id:number){
     return this.http.delete<any>("http://localhost/smarti-crud/laravel/public/api/employees/"+id)
     .pipe(map((res:any)=>{
       return res;
     }))
   }

  //  getEmployeesForSearch(term: string = null){
  //   if (term) {
  //     return this.http.get<any>(`http://localhost/smarti-crud/laravel/public/api/employees/${term}`).pipe(map(rsp => rsp.items));
  // } else {
  //     return of([]);
  // }
  //  }



}