import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteEmployeeComponent } from './admin-delete-employee.component';

describe('AdminDeleteEmployeeComponent', () => {
  let component: AdminDeleteEmployeeComponent;
  let fixture: ComponentFixture<AdminDeleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
