import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AcsesComponent} from './acses.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterTestingModule} from "@angular/router/testing";
import {AppleService} from "../services/apple.service";
import {baseURL} from "../shared/baseurl";
import {Observable, of} from "rxjs";
import {Acses} from "../shared/acses";
import {Apple} from "../shared/apple";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('AcsesComponent', () => {
  let component: AcsesComponent;
  let fixture: ComponentFixture<AcsesComponent>;

  beforeEach(async () => {

    const appleServiceStub = {
      getApplesWithDelay: function (): Observable<Apple[]> {
        return of(Acses);
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{
          path: 'acses',
          component: AcsesComponent
        }]),
        MatGridListModule,
        MatProgressSpinnerModule
      ],
      declarations: [AcsesComponent],
      providers: [
        {provide: AppleService, useValue: appleServiceStub},
        {provide: 'BaseURL', useValue: baseURL}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('acses should be 6', () => {
    expect(component.acses.length).toBe(6);
  });

  it('should display apple name in html', () => {
    fixture.detectChanges();
    let debug: DebugElement;
    let element: HTMLElement;
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;
    expect(element.textContent).toContain(Acses[0].name.toUpperCase());
  });

  it('selected apple', () => {
    expect(component.selectedApple).toBeUndefined();
    const apple = component.acses[0];
    component.onSelect(apple);
    expect(component.selectedApple).toBe(apple);
  });
});
