import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender-bookings/calender/calender.component';
import { SlotsViewComponent } from './free-slots-booking/slots-view/slots-view.component';
import { bookingRoutingComponents, BookingRoutingModule } from './booking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalenderHeaderComponent } from './calender-bookings/calender-header/calender-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBookingComponent } from './shared/create-booking/create-booking.component';

@NgModule({
  declarations: [
    bookingRoutingComponents,
    CalenderComponent,
    SlotsViewComponent,
    CalenderHeaderComponent,
    DashboardComponent,
    CreateBookingComponent,
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
