import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-aikidoka-detail',
  templateUrl: './aikidoka-detail.component.html',
  styleUrls: ['./aikidoka-detail.component.css']
})
export class AikidokaDetailComponent implements OnInit {

  aikidokaForm: FormGroup;
  submitted = false;
  aikidokasDetails = {}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() 
  {
    // this.aikidokaForm = this.formBuilder.group({
    // firstName: ['', Validators.required],            
    // lastName: ['', Validators.required],
    // grado: ['', Validators.required]
    // });
  }
  
  get f() { return this.aikidokaForm.controls; }

  onSubmit() 
  {
    this.submitted = true;

    if (this.aikidokaForm.invalid) {
        return;
    }
    
    alert('Aikidoka registrado !')
  }

  addEmployee()
  {
    
  }

  


}
