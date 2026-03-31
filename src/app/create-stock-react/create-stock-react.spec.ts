import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockReact } from './create-stock-react';

describe('CreateStockReact', () => {
  let component: CreateStockReact;
  let fixture: ComponentFixture<CreateStockReact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStockReact],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateStockReact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
