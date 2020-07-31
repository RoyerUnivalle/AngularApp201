import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarDespachosComponent } from './gestionar-despachos.component';

describe('GestionarDespachosComponent', () => {
  let component: GestionarDespachosComponent;
  let fixture: ComponentFixture<GestionarDespachosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarDespachosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarDespachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
