import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialManagementComponent } from './serial-management.component';

describe('SerialManagementComponent', () => {
  let component: SerialManagementComponent;
  let fixture: ComponentFixture<SerialManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
