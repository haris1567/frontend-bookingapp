import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Router } from '@angular/router';
import { AppService } from 'src/Services/app-Service/app.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from 'src/Services/User-Service/user.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private userService: UserService) { }
  ngOnInit(): void {

  }

  getData(): void {
    this.userService.getAllUsers().subscribe(response => {
      console.log(response);
    })
  }

}
