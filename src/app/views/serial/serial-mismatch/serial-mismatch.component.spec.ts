import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialMismatchComponent } from './serial-mismatch.component';

describe('SerialMismatchComponent', () => {
  let component: SerialMismatchComponent;
  let fixture: ComponentFixture<SerialMismatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialMismatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialMismatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
