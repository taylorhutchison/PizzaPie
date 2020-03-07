import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGraphicComponent } from './pizza-graphic.component';

describe('PizzaGraphicComponent', () => {
  let component: PizzaGraphicComponent;
  let fixture: ComponentFixture<PizzaGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
