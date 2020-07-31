import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacFacturasMaestrasComponent } from './fac-facturas-maestras.component';

describe('FacFacturasMaestrasComponent', () => {
  let component: FacFacturasMaestrasComponent;
  let fixture: ComponentFixture<FacFacturasMaestrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacFacturasMaestrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacFacturasMaestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
