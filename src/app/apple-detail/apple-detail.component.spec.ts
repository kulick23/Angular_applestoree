import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AppleDetailComponent} from './apple-detail.component';

describe('AppleDetailComponent', () => {
  let component: AppleDetailComponent;
  let fixture: ComponentFixture<AppleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppleDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
