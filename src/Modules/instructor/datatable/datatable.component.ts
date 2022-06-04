import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditBookingComponent } from '../dialog-components/edit-booking/edit-booking.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {


  deleteAction = 'Delete';
  editAction = 'Edit';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openBookingChangeDialog(action: string) {

    const dialogRef = this.dialog.open(EditBookingComponent, {
      width: "300px",
      data: {
        action
      }
    });

    dialogRef.afterClosed().subscribe(result => console.log(result));

  }
}
