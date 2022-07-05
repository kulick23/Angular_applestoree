import {Injectable} from '@angular/core';
import {Chosenapple} from "../shared/chosenapple";
import {delay, map, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";
import {User} from "../shared/user";
import {Apple} from "../shared/apple";


@Injectable({
  providedIn: 'root'
})
export class AppleService {

  public applesLink: string = "apples";
  public iphonLink: string = "iphon";
  public ipadLink: string = "ipad";
  public airpodsLink: string = "airpods";
  public macLink: string = "mac";
  public applewatchLink: string = "applewatch";
  public acsesLink: string = "acses";
  public feedbackLink: string = "feedback";
  public usersLink: string = "users";
  public ordersLink: string = "orders";

  public orderedApples: Chosenapple[] = [];
  public orderedIphon: Apple[] = [];
  public orderedIpad: Apple[] = [];
  public orderedAirpods: Apple[] = [];
  public orderedMac: Apple[] = [];
  public orderedApplewatch: Apple[] = [];
  public orderedAcses: Apple[] = [];

  public user: User = new User();
  public isUserSubmitted: boolean = false;

  constructor(private http: HttpClient,
              private dialog: MatDialog) {
  }

  public getApples(): Observable<Chosenapple[]> {
    return this.http.get<Chosenapple[]>(baseURL + this.applesLink);
  }
  public getIphon(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.iphonLink);
  }
  public getIpad(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.ipadLink);
  }
  public getAirpods(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.airpodsLink);
  }
  public getMac(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.macLink);
  }
  public getApplewatch(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.applewatchLink);
  }
  public getAcses(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.acsesLink);
  }


  public getApplesWithDelay(): Observable<Chosenapple[]> {
    return this.http.get<Chosenapple[]>(baseURL + this.applesLink)
      .pipe(
        delay(2000)
      );
  }
  public getIphonWithDelay(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.iphonLink)
      .pipe(
        delay(2000)
      );
  }
  public getIpadWithDelay(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.ipadLink)
      .pipe(
        delay(2000)
      );
  }
  public getAirpodsWithDelay(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.airpodsLink)
      .pipe(
        delay(2000)
      );
  }
  public getMacWithDelay(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.macLink)
      .pipe(
        delay(2000)
      );
  }
  public getApplewatchWithDelay(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.applewatchLink)
      .pipe(
        delay(2000)
      );
  }
  public getAcsesWithDelay(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.acsesLink)
      .pipe(
        delay(2000)
      );
  }

  public getFeaturedApples(): Observable<Chosenapple[]> {
    return this.http.get<Chosenapple[]>(baseURL + this.applesLink + "?featured=true");
  }
  public getFeaturedIphon(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.iphonLink + "?featured=true");
  }
  public getFeaturedIpad(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.ipadLink + "?featured=true");
  }
  public getFeaturedAirpods(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.airpodsLink + "?featured=true");
  }
  public getFeaturedMac(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.macLink + "?featured=true");
  }
  public getFeaturedApplewatch(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.applewatchLink + "?featured=true");
  }
  public getFeaturedAcses(): Observable<Apple[]> {
    return this.http.get<Apple[]>(baseURL + this.acsesLink + "?featured=true");
  }
  public getApple(id: string): Observable<Apple> {
    return this.http.get<Apple>(baseURL + this.applesLink + "/" + id).pipe(
      delay(500)
    );
  }


  public getApplesIds(): Observable<string[]> {
    return this.getApples().pipe(map(apples => apples.map(apple => apple.id)));
  }
  public getIphonIds(): Observable<string[]> {
    return this.getIphon().pipe(map(iphon => iphon.map(iphon => iphon.id)));
  }
  public getIpadIds(): Observable<string[]> {
    return this.getIpad().pipe(map(ipad => ipad.map(ipad => ipad.id)));
  }
  public getAirpodsIds(): Observable<string[]> {
    return this.getAirpods().pipe(map(airpods => airpods.map(airpods => airpods.id)));
  }
  public getMacIds(): Observable<string[]> {
    return this.getMac().pipe(map(mac => mac.map(mac => mac.id)));
  }
  public getApplewatchIds(): Observable<string[]> {
    return this.getApplewatch().pipe(map(applewatch => applewatch.map(applewatch => applewatch.id)));
  }
  public getAcsesIds(): Observable<string[]> {
    return this.getAcses().pipe(map(acses => acses.map(acses => acses.id)));
  }
  public getUser(): Observable<User> {
    return this.http.get<User>(baseURL + this.usersLink + "?username=" + this.user.username + "&password=" + this.user.password);
  }

  public checkUsername(): Observable<User> {
    return this.http.get<User>(baseURL + this.usersLink + "?username=" + this.user.username);
  }

  public onFormValueChanged(formGroup: FormGroup, formErrors: any, validationMessages: any) {
    if (!formGroup) {
      return;
    }
    for (const field in formErrors) {
      if (formErrors.hasOwnProperty(field)) {
        formErrors[field] = '';
        const control = formGroup.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  public openMessagePopup(message: string): void {
    this.dialog.open(PopupComponent, {
        width: '500px',
        height: '110px',
        data: message
      }
    );
  }
}
