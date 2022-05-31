import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private cookieService: CookieService) {
  }

  storeInCookie(key: string, data: any) {
    this.cookieService.set(key, JSON.stringify(data));
  }

  getFromCookie(key: string): any {
    let data = null;
    if (this.cookieService.check(key)) {
      try {
        data = JSON.parse(this.cookieService.get(key));
      } catch (e) { data = null }
    }

    return data;
  }

}
