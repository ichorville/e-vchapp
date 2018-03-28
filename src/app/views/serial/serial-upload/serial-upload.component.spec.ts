import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialUploadComponent } from './serial-upload.component';

describe('SerialUploadComponent', () => {
  let component: SerialUploadComponent;
  let fixture: ComponentFixture<SerialUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
