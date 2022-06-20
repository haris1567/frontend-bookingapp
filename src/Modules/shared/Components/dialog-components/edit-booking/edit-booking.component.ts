import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookingActionInfo, BookingEditInfo } from 'src/Models/booking';
import { BOOKING_ACTION } from 'src/Models/constants';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  calenderUrl = "assets/icons/calender.png";
  clockUrl = "assets/icons/clock.png";
  imageUrl = "";
  imageAlt = "";
  action = "";

  editInfo: BookingEditInfo;
  backgroundColor = '';

  bookingActions = BOOKING_ACTION;

  constructor(public dialogRef: MatDialogRef<EditBookingComponent>, @Inject(MAT_DIALOG_DATA) public data: BookingActionInfo) {
    this.action = data.action;
    this.editInfo = data;
    this.imageUrl = `assets/images/${data.action}.png`;
    this.backgroundColor = this.action === BOOKING_ACTION.createAction ? '#00535d' : '#289f69';
  }

  ngOnInit(): void {
  }

  closeDialog(confirm?: boolean) {
    if (!confirm) {
      this.dialogRef.close();
    }

    this.dialogRef.close(this.editInfo);

  }

}
