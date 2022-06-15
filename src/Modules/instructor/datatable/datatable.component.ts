import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from 'src/Models/booking';
import { EditBookingComponent } from '../dialog-components/edit-booking/edit-booking.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, OnChanges {

  @Input()
  bookingInformation: Booking[] = [];
  displayedColumns: string[] = ['id', 'date', 'title', 'time', 'labId', 'uid', 'dateAdded', 'actions'];

  public dataSource: any;

  deleteAction = 'Delete';
  editAction = 'Edit';

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
      labId,
      dateAdded
    })));
  }

  openBookingChangeDialog(action: string, id: number) {
    console.log({ action, id })
    const dialogRef = this.dialog.open(EditBookingComponent, {
      width: "300px",
      data: {
        action,
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => console.log(result));

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
