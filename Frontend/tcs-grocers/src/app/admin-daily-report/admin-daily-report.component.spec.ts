import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDailyReportComponent } from './admin-daily-report.component';

describe('AdminDailyReportComponent', () => {
  let component: AdminDailyReportComponent;
  let fixture: ComponentFixture<AdminDailyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDailyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDailyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
