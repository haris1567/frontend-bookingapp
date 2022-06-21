import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addHours, format, startOfHour } from 'date-fns';
import { BookingEditInfo } from 'src/Models/booking';
import { BOOKING_ACTION, DATE_FORMAT, TIME_FORMAT } from 'src/Models/constants';

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

  minDateStart = startOfHour(new Date());
  minDateEnd = new Date();
  maxDate = addHours(new Date(), 4);

  startDateRaw: Date;
  endDateRaw: Date;

  isCloseDisabled = false;

  constructor(public dialogRef: MatDialogRef<EditBookingComponent>, @Inject(MAT_DIALOG_DATA) public data: BookingEditInfo, private fb: FormBuilder) {
    dialogRef.disableClose = true;
    this.action = data.action;
    this.editInfo = data;
    this.imageUrl = `assets/images/${data.action}.png`;
    this.backgroundColor = this.action === BOOKING_ACTION.createAction ? '#00535d' : '#289f69';

    this.startDateRaw = startOfHour(new Date(data.startTime as Date));
    this.endDateRaw = startOfHour(addHours(new Date(this.data.startTime as Date), 1));

    const startDate = format(this.startDateRaw, TIME_FORMAT)
    const endDate = format(this.endDateRaw, TIME_FORMAT);

    this.editForm = this.fb.group({
      bookingDate: [data.startTime, Validators.required],
      bookingStartTime: [startDate, Validators.required],
      bookingEndTime: [endDate, Validators.required]
    });
  }

  ngOnInit(): void {
  }


  getCreatedDate(timeString: string): Date {
    const formatDate = format(this.editForm.controls['bookingDate'].value, DATE_FORMAT);
    const newDate = formatDate.concat(' ' + timeString);
    return new Date(newDate);
  }

  closeDialog(confirm: boolean) {
    if (!confirm) {
      this.dialogRef.close();
      return;
    }

    const startTime = this.getCreatedDate(this.editForm.controls['bookingStartTime'].value);
    const endTime = this.getCreatedDate(this.editForm.controls['bookingEndTime'].value);

    this.editInfo = {
      ...this.editInfo,
      startTime, endTime
    }
    this.dialogRef.close(this.editInfo);

  }

  disableActions(): void {
    this.isCloseDisabled = true;
  }
  enableActions(): void {
    this.isCloseDisabled = false;
  }
}
