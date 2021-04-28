import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddFundsComponent } from './user-add-funds.component';

describe('UserAddFundsComponent', () => {
  let component: UserAddFundsComponent;
  let fixture: ComponentFixture<UserAddFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
