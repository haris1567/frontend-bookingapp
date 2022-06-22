import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/Services/app-Service/app.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  bookingLogoUrl = "assets/images/bookingAppLogo.png";
  secondImageUrl = "";

  title = "BOOKING APP";

  constructor(private appService: AppService) { }
  ngOnInit(): void {

  }
}
