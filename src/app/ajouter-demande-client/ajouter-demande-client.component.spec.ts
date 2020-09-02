import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDemandeClientComponent } from './ajouter-demande-client.component';

describe('AjouterDemandeClientComponent', () => {
  let component: AjouterDemandeClientComponent;
  let fixture: ComponentFixture<AjouterDemandeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterDemandeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDemandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
