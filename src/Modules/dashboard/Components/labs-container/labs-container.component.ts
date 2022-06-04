import { Component, OnInit } from '@angular/core';
import { Lab } from 'src/Models/lab';
import { MatDialog } from '@angular/material/dialog';
import { LabService } from 'src/Services/Lab-Service/lab.service';
import { LabDetailsComponent } from '../lab-details/lab-details.component';
import { MODULE_ADDRESS } from 'src/Models/modules';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labs-container',
  templateUrl: './labs-container.component.html',
  styleUrls: ['./labs-container.component.scss']
})
export class LabsContainerComponent implements OnInit {

  labs: Lab[] = [{ name: 'CCNA Lab', id: 1, labId: 'ccna', details: 'CISCO Labs' }];
  isDialogOpen = false;

  constructor(public dialog: MatDialog, private labService: LabService, private router: Router) { }

  ngOnInit(): void {
  }

  showLab(labId: string) {


    if (this.isDialogOpen) {
      return;
    }

    const dialogRef = this.dialog.open(LabDetailsComponent, {
      width: '500px',
      data: { lab: this.labs.find(lab => lab.labId == labId) }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      if (result) {
        this.router.navigate([`/${MODULE_ADDRESS.BOOKING}/calender/${labId}`]);
      }
    });
  }
}
