import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateUserDto } from '../user.service';
import { emailValidator, passwordMatch } from '../util';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordControl = new FormControl('', [Validators.required, Validators.minLength(5)])


  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'rePassword': new FormControl('', [passwordMatch(this.passwordControl)]),
    }),
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  handleRegister(): void {


    const { username, email, passwords } = this.registerFormGroup.value

    const body: CreateUserDto = {
      username: username,
      email: email,
      password: passwords.password
    }
    this.userService.register$(body).subscribe((result) => {
      this.router.navigate(['/home'])
      localStorage.setItem('authToken', result.accessToken);
      localStorage.setItem('userId', result._id);
      localStorage.setItem('email', result.email);
      localStorage.setItem('username', result.username);
    })
  }

}
