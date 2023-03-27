(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge += 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('123');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
    console.log();
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b1010;
  console.log('bin', bin);

  const myNumber: Number = 10; // ! Don't do this
})();
