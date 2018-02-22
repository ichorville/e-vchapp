import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderConfigComponent } from './purchase-order-config.component';

describe('PurchaseOrderConfigComponent', () => {
  let component: PurchaseOrderConfigComponent;
  let fixture: ComponentFixture<PurchaseOrderConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
