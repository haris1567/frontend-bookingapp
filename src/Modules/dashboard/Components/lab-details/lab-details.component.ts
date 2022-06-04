import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lab-details',
  templateUrl: './lab-details.component.html',
  styleUrls: ['./lab-details.component.scss']
})
export class LabDetailsComponent implements OnInit {


  @Input() cardId: number = 1;
  labName = `CCNA Lab`;
  labDetails = `With ${this.labName}, Learners can access and utilize the lab's usefulness.`;

  constructor(dialogRef: MatDialogRef<LabDetailsComponent>) { }
  ngOnInit(): void {
  }

}
