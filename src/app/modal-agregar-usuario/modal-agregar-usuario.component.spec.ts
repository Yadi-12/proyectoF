import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarUsuarioComponent } from './modal-agregar-usuario.component';

describe('ModalAgregarUsuarioComponent', () => {
  let component: ModalAgregarUsuarioComponent;
  let fixture: ComponentFixture<ModalAgregarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAgregarUsuarioComponent]
    });
    fixture = TestBed.createComponent(ModalAgregarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
