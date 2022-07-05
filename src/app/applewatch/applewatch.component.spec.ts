import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ApplewatchComponent} from './applewatch.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterTestingModule} from "@angular/router/testing";
import {AppleService} from "../services/apple.service";
import {baseURL} from "../shared/baseurl";
import {Observable, of} from "rxjs";
import {Applewatch} from "../shared/applewatch";
import {Apple} from "../shared/apple";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('ApplewatchComponent', () => {
  let component: ApplewatchComponent;
  let fixture: ComponentFixture<ApplewatchComponent>;

  beforeEach(async () => {

    const appleServiceStub = {
      getApplesWithDelay: function (): Observable<Apple[]> {
        return of(Applewatch);
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{
          path: 'applewatch',
          component: ApplewatchComponent
        }]),
        MatGridListModule,
        MatProgressSpinnerModule
      ],
      declarations: [ApplewatchComponent],
      providers: [
        {provide: AppleService, useValue: appleServiceStub},
        {provide: 'BaseURL', useValue: baseURL}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplewatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mac should be 6', () => {
    expect(component.applewatch.length).toBe(6);
  });

  it('should display apple name in html', () => {
    fixture.detectChanges();
    let debug: DebugElement;
    let element: HTMLElement;
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;
    expect(element.textContent).toContain(Applewatch[0].name.toUpperCase());
  });

  it('selected apple', () => {
    expect(component.selectedApple).toBeUndefined();
    const apple = component.applewatch[0];
    component.onSelect(apple);
    expect(component.selectedApple).toBe(apple);
  });
});
