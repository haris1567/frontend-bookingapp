import { Component, OnInit } from '@angular/core';
import { simulate } from '@bjornlu/colorblind';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  colorModes = [{
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

  selectedMode = '';
  constructor() { }

  ngOnInit(): void {
    console.log(simulate({ r: 120, g: 50, b: 30 }, 'protanopia'));
  }

  onColorChange(color: string): void {

    console.log('new color:', color);
  }

}
