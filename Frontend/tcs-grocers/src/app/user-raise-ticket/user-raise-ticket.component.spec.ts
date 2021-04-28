import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRaiseTicketComponent } from './user-raise-ticket.component';

describe('UserRaiseTicketComponent', () => {
  let component: UserRaiseTicketComponent;
  let fixture: ComponentFixture<UserRaiseTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRaiseTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRaiseTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
