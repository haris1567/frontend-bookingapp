import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookingEditInfo } from 'src/Models/booking';
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
  editForm: FormGroup;

  bookingActions = BOOKING_ACTION;

  constructor(public dialogRef: MatDialogRef<EditBookingComponent>, @Inject(MAT_DIALOG_DATA) public data: BookingEditInfo, private fb: FormBuilder,) {
    this.action = data.action;
    this.editInfo = data;
    this.imageUrl = `assets/images/${data.action}.png`;
    this.backgroundColor = this.action === BOOKING_ACTION.createAction ? '#00535d' : '#289f69';


    this.editForm = this.fb.group({
      bookingDate: [data.startTime, Validators.required],
      bookingTime: [data.startTime, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  closeDialog(confirm?: boolean) {
    if (!confirm) {
      this.dialogRef.close();
    }

    const startTime = new Date();
    const endTime = new Date();

    this.editInfo = {
      ...this.editInfo,
      startTime, endTime
    }
    this.dialogRef.close(this.editInfo);

  }

}
