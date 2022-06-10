import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
    providedIn: 'root'
})
export class AppNotificationService {

    constructor(private notificationService: NotificationsService) { }

    showSuccess(title: string, message: string): void {
        this.notificationService.success(title, message);
    }

    showWarning(title: string, message: string): void {
        this.notificationService.warn(title, message);
    }

    showError(title: string, message: string): void {
        this.notificationService.error(title, message);
    }

    showInfo(title: string, message: string): void {
        this.notificationService.info(title, message);
    }

}
