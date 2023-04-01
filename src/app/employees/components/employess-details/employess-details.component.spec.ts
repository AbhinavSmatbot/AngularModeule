import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployessDetailsComponent } from './employess-details.component';

describe('EmployessDetailsComponent', () => {
  let component: EmployessDetailsComponent;
  let fixture: ComponentFixture<EmployessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployessDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
