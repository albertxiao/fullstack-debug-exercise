import { calculateCartTotal } from '../cart';

test('cart total with discount', () => {
  const cart = [{ price: 50, quantity: 2 }]; // total 100
  expect(calculateCartTotal(cart)).toBe(90); 
});

test('empty cart returns 0', () => {
  const cart: { price: number; quantity: number }[] = [];
  expect(calculateCartTotal(cart)).toBe(0); 
});
