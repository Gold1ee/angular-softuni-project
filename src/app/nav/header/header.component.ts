import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  currentUsername: string

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUsername = this.userService.getUsername()
  }

  isLoggedIn() {
    return this.userService.isLoggedIn()
  }

  logoutHandler() {
    this.userService.logout()
    this.router.navigate(['/home'])
  }

}
