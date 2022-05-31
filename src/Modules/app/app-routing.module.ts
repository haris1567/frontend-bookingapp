import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  { path: "", redirectTo: `/home`, pathMatch: "full" },
  { path: "home", component: MainComponent },
  {
    path: "dashboard",
    loadChildren: () =>
      import("../dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "booking",
    loadChildren: () =>
      import("../booking/booking.module").then(m => m.BookingModule)
  },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
