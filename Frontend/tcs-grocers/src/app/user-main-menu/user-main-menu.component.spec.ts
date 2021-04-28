import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainMenuComponent } from './user-main-menu.component';

describe('UserMainMenuComponent', () => {
  let component: UserMainMenuComponent;
  let fixture: ComponentFixture<UserMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMainMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
