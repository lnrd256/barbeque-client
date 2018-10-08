import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor( private formBuilder: FormBuilder, 
                  private router: Router,
                  private api:ApiService) {}
    
    ngOnInit() {
       this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // get form values
    get f() { return this.loginForm.controls; }

    onLogin(event) {
      console.log(this.f);
      event.preventDefault();
        this.api.login(
            this.f.email.value,
            this.f.password.value
          )
            .subscribe(
              r => {
                localStorage.setItem('TOKEN', r['access_token']);
                localStorage.setItem('isLoggedin','true');
                this.router.navigateByUrl('/dashboard');
              },
              r=>{
                console.log(r.error.message );
              }
            
            )
              
  
    }
    redirect(event){
      event.preventDefault()
      this.router.navigateByUrl('signup');
    }
}
