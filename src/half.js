function halfBill(bill, tax, tip) {
  const billWithTax = bill + (bill / 100) * tax;
  const half = ((billWithTax + (billWithTax / 100) * tip) / 2).toFixed(2);
  console.log(`You will owe ${half} each!`);
}

halfBill(12.5, 8.875, 20);
