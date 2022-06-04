import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MODULE_ADDRESS } from 'src/Models/modules';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = true;
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  checkLogin() {

    if (this.isLoggedIn) {
      this.router.navigate([`/${MODULE_ADDRESS.INSTRUCTOR_PANEL}`]);
    }
  }

}
