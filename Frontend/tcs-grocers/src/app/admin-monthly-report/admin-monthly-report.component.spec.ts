import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonthlyReportComponent } from './admin-monthly-report.component';

describe('AdminMonthlyReportComponent', () => {
  let component: AdminMonthlyReportComponent;
  let fixture: ComponentFixture<AdminMonthlyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonthlyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
