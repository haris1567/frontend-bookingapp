import { Component, OnInit } from '@angular/core';
import { ORIGINAL_COLOR_MODE } from 'src/Models/constants';
import { AppService } from 'src/Services/app-Service/app.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  colorModes = [
    {
      title: ORIGINAL_COLOR_MODE,
      description: 'no simulation'
    },
    {
      title: 'protanopia',
      description: 'No red',

    }, {
      title: 'deuteranopia',
      description: 'No green',

    }, {
      title: 'tritanopia',
      description: 'No blue',

    }, {
      title: 'achromatopsia',
      description: 'No color',

    }];

  accessOptions = [{
    title: 'Activate Symbols',
    description: 'Altert & Indicators',

  }, {
    title: 'Bold Size',
    description: '',

  }];

  selectedColorMode = '';

  constructor(private appService: AppService) {
    this.selectedColorMode = this.appService.currentColorMode;
    console.log('MOde:', this.selectedColorMode)
  }

  ngOnInit(): void {
  }

  onColorChange(color: string): void {
    this.selectedColorMode = color;
    this.appService.setColorMode(color);
  }

}
