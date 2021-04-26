import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWeeklyReportComponent } from './admin-weekly-report.component';

describe('AdminWeeklyReportComponent', () => {
  let component: AdminWeeklyReportComponent;
  let fixture: ComponentFixture<AdminWeeklyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWeeklyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWeeklyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
