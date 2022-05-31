import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './Components/calender/calender.component';

const routes: Routes = [
    { path: '', component: CalenderComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule { }

export const bookingRoutingComponents = [];
