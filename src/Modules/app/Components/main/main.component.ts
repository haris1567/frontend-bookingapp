import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/Services/User-Service/user.service';
import { AppNotificationService } from 'src/Services/app-notification-service/app-notification-service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  bookingLogoUrl = "assets/images/bookingAppLogo.png";
  secondImageUrl = "";

  title = "BOOKING APP";

  constructor(private userService: UserService, private notificationService: AppNotificationService) { }
  ngOnInit(): void {

  }

  getData(): void {
    this.userService.getAllUsers().subscribe(response => {
      console.log(response);
      this.notificationService.showSuccess('Success', 'Data Found!');
    }, (err) => {
      console.log(err);
      this.notificationService.showError('Failure', err.message);
    })
  }

}
