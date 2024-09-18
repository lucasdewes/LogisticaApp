import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteIndividualComponent } from './cliente-individual.component';

describe('ClienteIndividualComponent', () => {
  let component: ClienteIndividualComponent;
  let fixture: ComponentFixture<ClienteIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
