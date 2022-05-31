import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {

  @Input()
  cardId: number = 1;


  constructor(dialogRef: MatDialogRef<ActionCardComponent>) { }

  ngOnInit(): void {
  }

}
