import {
  Component,
  ViewChild,
  TemplateRef,
  OnInit,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  addHours,
  subHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EditBookingComponent } from 'src/Modules/shared/Components/dialog-components/edit-booking/edit-booking.component';
import { MatDialog } from '@angular/material/dialog';
import { Booking, BookingEditInfo, BookingEvent } from 'src/Models/booking';
import { BOOKING_ACTION, LABNAMES } from 'src/Models/constants';
import { UserInfoInputComponent } from 'src/Modules/shared/Components/dialog-components/user-info-input/user-info-input.component';
import { BookingService } from 'src/Services/Booking-Service/booking.service';
import { ConfirmationComponent } from 'src/Modules/shared/Components/dialog-components/confirmation/confirmation.component';
import { ViewBookingComponent } from 'src/Modules/shared/Components/dialog-components/view-booking/view-booking.component';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;

  activeDayIsOpen: boolean = false; // To open current Day Data on default

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  clickedDate: Date | undefined;

  refresh = new Subject<void>();

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  // Events or Bookings Stored on Calender
  events: CalendarEvent[] = [];

  bookings: Booking[] = [];

  constructor(
    private dialog: MatDialog,
    private bookingService: BookingService
  ) {
    this.getAllBookings();
  }

  ngOnInit(): void {
  }

  getAllBookings() {

    this.bookingService.getAllBookings().subscribe(response => {
      console.log('Response:', response);
      this.bookings = response;
      this.mapBookingEventToCalenderEvent(response);
    });
  }

  mapBookingEventToCalenderEvent(bookingEvents: Booking[]): void {

    this.events = bookingEvents.map(({ startTime, endTime, title, uid, id }) => {
      let start = new Date(startTime);
      let end = new Date(endTime);
      let localDiffHours = start.getTimezoneOffset() / 60;


      start = localDiffHours > 0 ? subHours(start, Math.abs(localDiffHours)) : addHours(start, Math.abs(localDiffHours));
      end = localDiffHours > 0 ? subHours(end, Math.abs(localDiffHours)) : addHours(end, Math.abs(localDiffHours));

      return {
        id, start, end, title: `${title} - ${uid}`, color: colors.red, actions: this.actions
      }

    });
    this.refresh.next();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.clickedDate = date;
    this.openCreateEventDialog();
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }


  handleEvent(action: string, event: CalendarEvent): void {
    this.dialog.open(ViewBookingComponent, {
      width: "50rem",
      height: "45rem",
      data: this.bookings.find(booking => booking.id === event.id)
    });
  }

  openCreateEventDialog(): void {
    const data: BookingEditInfo = {
      action: BOOKING_ACTION.createAction,
      id: 0,
      startTime: this.clickedDate,
      labName: LABNAMES.ccna
    }
    const dialogRef = this.dialog.open(EditBookingComponent, {
      data,
      width: "50%",
      height: "40rem",
      minWidth: "40rem",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('BookingResult:', result);
        const secondDialog = this.dialog.open(UserInfoInputComponent, {
          data: result,
          width: "50%",
          height: "90%",
          minWidth: "40rem",
          minHeight: "45rem",
        });
        secondDialog.afterClosed().subscribe((bookingObject: BookingEvent) => {
          this.sendBookingData(data, bookingObject)
        })
      }
    });
  }


  private sendBookingData(actionInfo: BookingEditInfo, event: BookingEvent): void {
    if (event) {
      console.log('BookingObject:', event);
      this.bookingService.createBooking(event).subscribe((response) => {
        if (response) {
          this.dialog.open(ConfirmationComponent, {
            width: "50rem",
            height: "40rem",
            data: {
              actionInfo,
              event
            }
          });

          this.getAllBookings();
        }
      });
    }
  }




  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
