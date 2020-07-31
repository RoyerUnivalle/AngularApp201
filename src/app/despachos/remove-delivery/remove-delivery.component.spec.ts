import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDeliveryComponent } from './remove-delivery.component';

describe('RemoveDeliveryComponent', () => {
  let component: RemoveDeliveryComponent;
  let fixture: ComponentFixture<RemoveDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
