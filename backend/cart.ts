export function calculateCartTotal(cart: { price: number; quantity: number }[]): number {
  let total = 0;
  for (let i = 0; i <= cart.length; i++) { 
    total += cart[i].price * cart[i].quantity;
  }
  if (total > 100) {
    total = total * 0.9;
  }
  return parseFloat(total.toFixed(2)); // should returns number
}
