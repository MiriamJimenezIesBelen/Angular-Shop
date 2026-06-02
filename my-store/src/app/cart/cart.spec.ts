import { TestBed } from '@angular/core/testing';
import { Cart } from './cart';

describe('CartComponent', () => {
  let component: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cart]
    });

    const fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
