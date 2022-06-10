import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptService } from 'src/Services/http-intercept.service';
import { NotificationAnimationType, Options, SimpleNotificationsModule } from 'angular2-notifications';

const options: Options = {
  position: ["bottom", "right"],
  timeOut: 2000,
  clickToClose: true,
  preventDuplicates: true,
  animate: NotificationAnimationType.FromRight
};
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot({ ...options }),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
