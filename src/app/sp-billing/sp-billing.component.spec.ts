import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpBillingComponent } from './sp-billing.component';

describe('SpBillingComponent', () => {
  let component: SpBillingComponent;
  let fixture: ComponentFixture<SpBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
