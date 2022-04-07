import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { emailValidator } from '../util';
import { CreateUserDto } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  LoginHandler(): void {
    console.log('Login Handler', this.loginFormGroup)
  }
  handleLogin(): void {
    const { email, password } = this.loginFormGroup.value

    const body: CreateUserDto = {
      email: email,
      password: password,
      username: ''
    }
    this.userService.login$(body).subscribe((result) => {
      this.router.navigate(['/home'])
      localStorage.setItem('authToken', result.accessToken);
      localStorage.setItem('userId', result._id);
      localStorage.setItem('email', result.email);
      localStorage.setItem('username', result.username);
    })
  }

}
