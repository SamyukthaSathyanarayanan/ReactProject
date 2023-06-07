export function calculateTotalPrice(cartItems) {
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.qty;
  });

  const discount = totalPrice * 0.1;
  const discountedPrice = totalPrice - discount;

  return { totalPrice, discountedPrice, discount };
}
