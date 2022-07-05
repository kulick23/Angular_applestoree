import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BuyComponent} from './buy.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterTestingModule} from "@angular/router/testing";
import {AppleService} from "../services/apple.service";
import {baseURL} from "../shared/baseurl";
import {Observable, of} from "rxjs";
import {Apples} from "../shared/apples";
import {Chosenapple} from "../shared/chosenapple";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('BuyComponent', () => {
  let component: BuyComponent;
  let fixture: ComponentFixture<BuyComponent>;

  beforeEach(async () => {

    const chosenappleServiceStub = {
      getApplesWithDelay: function (): Observable<Chosenapple[]> {
        return of(Apples);
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{
          path: 'buy',
          component: BuyComponent
        }]),
        MatGridListModule,
        MatProgressSpinnerModule
      ],
      declarations: [BuyComponent],
      providers: [
        {provide: AppleService, useValue: chosenappleServiceStub},
        {provide: 'BaseURL', useValue: baseURL}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('apples should be 6', () => {
    expect(component.apples.length).toBe(6);
  });

  it('should display chosenapple name in html', () => {
    fixture.detectChanges();
    let debug: DebugElement;
    let element: HTMLElement;
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;
    expect(element.textContent).toContain(Apples[0].name.toUpperCase());
  });

  it('selected chosenapple', () => {
    expect(component.selectedChosenapple).toBeUndefined();
    const chosenapple = component.apples[0];
    component.onSelect(chosenapple);
    expect(component.selectedChosenapple).toBe(chosenapple);
  });
});
