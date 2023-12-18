export function calcDiscountedPrice(price, discount) {
  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  return finalPrice;
}
