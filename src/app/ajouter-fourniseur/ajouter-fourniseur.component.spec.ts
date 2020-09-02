import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFourniseurComponent } from './ajouter-fourniseur.component';

describe('AjouterFourniseurComponent', () => {
  let component: AjouterFourniseurComponent;
  let fixture: ComponentFixture<AjouterFourniseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterFourniseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFourniseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
