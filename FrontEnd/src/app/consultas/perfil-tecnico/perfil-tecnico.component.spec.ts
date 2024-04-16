import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTecnicoComponent } from './perfil-tecnico.component';

describe('PerfilTecnicoComponent', () => {
  let component: PerfilTecnicoComponent;
  let fixture: ComponentFixture<PerfilTecnicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilTecnicoComponent]
    });
    fixture = TestBed.createComponent(PerfilTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
