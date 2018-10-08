import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    constructor( private formBuilder: FormBuilder, 
                  private router: Router,
                  private api:ApiService) {}
    
    ngOnInit() {
       this.registerForm = this.formBuilder.group({
           name:['',Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            password_confirmation:['',Validators.required],
            zipcode:['']
        });
    }

    // get form values
    get f() { return this.registerForm.controls; }

    redirect(event){
        event.preventDefault();
        this.router.navigateByUrl('/login');
    }

    onClick(event){
        event.preventDefault();
        this.api.register(this.f).subscribe(
            r=>{
                alert('Usuario registrado');
                this.router.navigateByUrl('/login');
            },
            r=>{
                alert('Error en registro');
                console.log(r.error);
            }
        )
    }
   
}
