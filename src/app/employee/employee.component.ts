import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  employee : IEmployee
  employees : Observable<IEmployee[]>

  addEmployee()
  {
    let employee:IEmployee = 
    {
      employeeId : this.employee.employeeId,
      employeeName : this.employee.employeeName,
      employeeLastName : this.employee.employeeLastName,
      employeeBelt : this.employee.employeeBelt
    };
    this.employeeService.addEmployee(this.employee)
  }

  getEmployees()
  {
    this.employees = this.employeeService.getEmployees();
  }

  ngOnInit() 
  {
    this.getEmployees();
    // this.employees = this.employeeService.getEmployees();
    //this.employeeService.getEmployees()
    //.subscribe(employees => this.employees = employees)
  }

  // information = '';
  // onClickInformation() {    
  //   this.information = 'This is a list of employees';
  // }

  // messageFromNestedComponent = '';     
  // onProficiencyClicked(message:string) : void {         
  // this.messageFromNestedComponent = 'Here is the message from nested component: ' + message;     
  // }
}

// class NgStyleExampleComponent {

//   getColor(employeeBelt: any) {
//     switch (employeeBelt) {
//       case 'DAN':
//         return 'black';
//       case '1KYU':
//         return 'brown';
//       case '2KYU':
//         return 'blue';
//       default : 'black';
//     }
//   }
//} 