import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../util';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator ]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  LoginHandler(): void {
    console.log('Login Handler', this.loginFormGroup)
  }
  handleLogin(): void {
    console.log(this.loginFormGroup.value)
  }

}
