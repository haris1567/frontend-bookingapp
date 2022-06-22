import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { hexToRgbString } from 'src/Models/constants';
import { AppService } from 'src/Services/app-Service/app.service';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges {

  @Input() currentColor: string = '';
  constructor(private appService: AppService) {
    this.appService.changes.subscribe(() =>
      this.changeColor());
  }

  @HostBinding('style.color')
  newColor: string = '';


  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor();
  }

  changeColor() {
    this.newColor = this.appService.getSimulatedColor(this.currentColor[0] == '#' ? hexToRgbString(this.currentColor) : this.currentColor);
    console.log(`Values: ${this.currentColor}`, hexToRgbString(this.currentColor), { newColor: this.newColor });
  }

}
