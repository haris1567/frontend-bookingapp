import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lab } from 'src/Models/lab';

@Component({
  selector: 'app-lab-details',
  templateUrl: './lab-details.component.html',
  styleUrls: ['./lab-details.component.scss']
})
export class LabDetailsComponent implements OnInit {


  @Input() cardId: number = 1;
  labName = `CCNA Lab`;
  labDetails = `With ${this.labName}, Learners can access and utilize the lab's usefulness.`;

  constructor(public dialogRef: MatDialogRef<LabDetailsComponent>, @Inject(MAT_DIALOG_DATA) public lab: Lab) {
    const { name, details } = this.lab;
    this.labName = name;
    this.labDetails = details;
  }

  ngOnInit(): void {

  }

  closeDialog(data: any): void {
    this.dialogRef.close(data);
  }

}
