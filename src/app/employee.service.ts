import { Injectable } from '@angular/core';
import { IEmployee } from './employee/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string = 'assets/employees.json';
  constructor(private _http: HttpClient) { }

    
/*getEmployees() : IEmployee[]{

      return[
    {
    "employeeId" : 1, 
    "employeeName" : "Tuba", 
    "projectId":100
    },
    {
      "employeeId" : 2, 
      "employeeName" : "Atul", 
      "projectId":101
    },
    {
      "employeeId" : 3, 
      "employeeName" : "Theran", 
      "projectId":101
    } 
    ]
  }*/
    
  getEmployees() : Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(this._url);                
  }

  addEmployee(employee : IEmployee) {
    // return new Promise(resolve => {
    //   this._http.post<IEmployee[]>(this._url, employee);
    // });

    return this._http.post<IEmployee[]>(this._url, employee);
  }
}

