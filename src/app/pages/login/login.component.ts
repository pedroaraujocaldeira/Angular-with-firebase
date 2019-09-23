import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public formBuilder: FormBuilder, private loginService: LoginService ) { }
  username: string;
  password: string;


  loginForm: FormGroup;
  isLogin: boolean;
  role: string;
  submitted: boolean;

  isSuccess: boolean;
  isFailure: boolean;

  alertSuccessMsg;
  alertFailMsg;

  ngOnInit() {

    this.isFailure = false;
    this.isSuccess = false;

    this.isLogin = true;

    if (localStorage['role'] != null &&
      localStorage['token'] != null) {
      this.role = localStorage['role'];
      this.router.navigate(['/clientes']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid)
      return true;
    else
      return false;
  }


  login(mail, password) {

    if (this.onSubmit())
      return;

    this.loginService.login(mail, password).then(res => {


      if (res == '200') {
        this.alertSuccessMsg = res;
        this.alertFailMsg = "";
        this.isSuccess = true;
        this.isFailure = false;
        setTimeout(() => { this.router.navigate(['/clientes']) }, 1500);
      }
      else {
        this.alertSuccessMsg = "";
        this.isSuccess = false;
        this.isFailure = true;
      }


    },
      error => {
        console.log(error);
      })


  }

 



}
