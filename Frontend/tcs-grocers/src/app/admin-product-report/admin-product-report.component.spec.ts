import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductReportComponent } from './admin-product-report.component';

describe('AdminProductReportComponent', () => {
  let component: AdminProductReportComponent;
  let fixture: ComponentFixture<AdminProductReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
