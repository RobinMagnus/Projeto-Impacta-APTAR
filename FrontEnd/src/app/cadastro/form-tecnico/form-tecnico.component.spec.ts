import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTecnicoComponent } from './form-tecnico.component';

describe('FormTecnicoComponent', () => {
  let component: FormTecnicoComponent;
  let fixture: ComponentFixture<FormTecnicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTecnicoComponent]
    });
    fixture = TestBed.createComponent(FormTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
