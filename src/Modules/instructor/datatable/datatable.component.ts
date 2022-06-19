import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Booking, BookingActionInfo } from 'src/Models/booking';
import { BOOKING_ACTION } from 'src/Models/constants';
import { EditBookingComponent } from 'src/Modules/shared/Components/dialog-components/edit-booking/edit-booking.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, OnChanges {

  @Input()
  bookingInformation: Booking[] = [];
  displayedColumns: string[] = ['id', 'date', 'title', 'time', 'labName', 'uid', 'dateAdded', 'actions'];

  public dataSource: any;

  deleteAction = BOOKING_ACTION.deleteAction;
  editAction = BOOKING_ACTION.editAction;

  constructor(public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {

    const info = changes['bookingInformation'].currentValue;
    if (info) {
      this.mapBookingToDataSource();
    }
  }


  ngOnInit(): void {
  }

  mapBookingToDataSource(): void {
    this.dataSource = new MatTableDataSource(this.bookingInformation.map(({ id, labId, startTime, endTime, dateAdded, uid, title }: Booking) => ({
      id,
      date: startTime,
      title,
      time: `${(new Date(startTime)).getHours()}00 - ${(new Date(endTime)).getHours()}00`,
      uid,
      labName: labId == 1 ? "CCNA Lab" : "Lab Not Available",
      dateAdded
    })));
  }

  openBookingChangeDialog(action: string, id: number) {
    console.log({ action, id, editAction: this.editAction, deleteAction: this.deleteAction });
    const data: BookingActionInfo = {
      action, id
    }
    const dialogRef = this.dialog.open(EditBookingComponent, {
      width: "50%",
      height: "70%",
      minWidth: "40rem",
      minHeight: "40rem",
      data,

    });

    dialogRef.afterClosed().subscribe(result => console.log(result));

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
