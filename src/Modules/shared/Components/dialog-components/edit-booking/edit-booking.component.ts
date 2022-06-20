import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addHours, format, parseISO } from 'date-fns';
import { BookingEditInfo } from 'src/Models/booking';
import { BOOKING_ACTION, DATE_TIME_FORMAT } from 'src/Models/constants';

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

  constructor(public dialogRef: MatDialogRef<EditBookingComponent>, @Inject(MAT_DIALOG_DATA) public data: BookingEditInfo, private fb: FormBuilder) {
    this.action = data.action;
    this.editInfo = data;
    this.imageUrl = `assets/images/${data.action}.png`;
    this.backgroundColor = this.action === BOOKING_ACTION.createAction ? '#00535d' : '#289f69';

    const startDate = format(new Date(data.startTime as Date), DATE_TIME_FORMAT)
    const endDate = format(addHours(new Date(this.data.startTime as Date), 1), DATE_TIME_FORMAT);
    this.editForm = this.fb.group({
      bookingDate: [data.startTime, Validators.required],
      bookingStartTime: [startDate, Validators.required],
      bookingEndTime: [endDate, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  closeDialog(confirm: boolean) {
    if (!confirm) {
      this.dialogRef.close();
      return;
    }

    const startTime = new Date(this.editForm.controls['bookingStartTime'].value);
    const endTime = new Date(this.editForm.controls['bookingEndTime'].value);

    this.editInfo = {
      ...this.editInfo,
      startTime, endTime
    }
    this.dialogRef.close(this.editInfo);

  }

}
