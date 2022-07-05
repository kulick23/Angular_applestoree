import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AirpodsComponent} from './airpods.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterTestingModule} from "@angular/router/testing";
import {AppleService} from "../services/apple.service";
import {baseURL} from "../shared/baseurl";
import {Observable, of} from "rxjs";
import {Airpods} from "../shared/airpods";
import {Apple} from "../shared/apple";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('AirpodsComponent', () => {
  let component: AirpodsComponent;
  let fixture: ComponentFixture<AirpodsComponent>;

  beforeEach(async () => {

    const appleServiceStub = {
      getApplesWithDelay: function (): Observable<Apple[]> {
        return of(Airpods);
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{
          path: 'airpods',
          component: AirpodsComponent
        }]),
        MatGridListModule,
        MatProgressSpinnerModule
      ],
      declarations: [AirpodsComponent],
      providers: [
        {provide: AppleService, useValue: appleServiceStub},
        {provide: 'BaseURL', useValue: baseURL}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirpodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('airpods should be 6', () => {
    expect(component.airpods.length).toBe(6);
  });

  it('should display apple name in html', () => {
    fixture.detectChanges();
    let debug: DebugElement;
    let element: HTMLElement;
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;
    expect(element.textContent).toContain(Airpods[0].name.toUpperCase());
  });

  it('selected apple', () => {
    expect(component.selectedApple).toBeUndefined();
    const apple = component.airpods[0];
    component.onSelect(apple);
    expect(component.selectedApple).toBe(apple);
  });
});
