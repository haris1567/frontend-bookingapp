import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './Components/calender/calender.component';
import { SlotsViewComponent } from './Components/slots-view/slots-view.component';
import { BookingDatatableComponent } from './Components/booking-datatable/booking-datatable.component';
import { bookingRoutingComponents, BookingRoutingModule } from './booking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    bookingRoutingComponents,
    CalenderComponent,
    SlotsViewComponent,
    BookingDatatableComponent
  ],
  imports: [
    CommonModule, SharedModule,
    BookingRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class BookingModule { }
