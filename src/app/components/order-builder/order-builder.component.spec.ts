import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBuilderComponent } from './order-builder.component';

describe('OrderBuilderComponent', () => {
  let component: OrderBuilderComponent;
  let fixture: ComponentFixture<OrderBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
