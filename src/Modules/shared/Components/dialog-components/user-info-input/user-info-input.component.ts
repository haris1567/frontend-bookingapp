import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Booking, BookingActionInfo, BookingEditInfo, BookingEvent } from 'src/Models/booking';
import { BOOKING_ACTION, LAB_INFO } from 'src/Models/constants';

@Component({
  selector: 'app-user-info-input',
  templateUrl: './user-info-input.component.html',
  styleUrls: ['./user-info-input.component.scss']
})
export class UserInfoInputComponent implements OnInit {


  personUrl = "assets/icons/person.png";
  emailUrl = "assets/icons/email.png";
  imageUrl = "";
  imageAlt = "";
  action = "";

  editInfo: BookingEvent | undefined;
  backgroundColor = '';

  bookingActions = BOOKING_ACTION;

  constructor(public dialogRef: MatDialogRef<UserInfoInputComponent>, @Inject(MAT_DIALOG_DATA) public data: BookingActionInfo, private router: Router) {
    this.action = data.action;
    this.imageUrl = `assets/images/${data.action}.png`;
    this.backgroundColor = this.action === BOOKING_ACTION.createAction ? '#00535d' : '#289f69';

    const labName = this.router.url.slice(this.router.url.lastIndexOf('/'));
    console.log(this.router.url, labName);
  }


  ngOnInit(): void {
  }

  closeDialog(confirm?: boolean) {

    if (!confirm) {
      this.dialogRef.close();
    }

    this.editInfo = {
      start: new Date(),
      end: new Date(),
      labId: LAB_INFO.ccna,
      title: '',
      email: '',
      uid: '',
    }

  }

}
