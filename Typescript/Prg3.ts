type Numbers = {
  a: number;
  b: number;
};

function Add({ a, b }: Numbers) {
  console.log( a + b );
}

function Subtract({ a, b }: Numbers) {
console.log( a - b );
}

function Mult({ a, b }: Numbers) {
console.log( a * b );
}

function Div({ a, b }: Numbers) {
console.log( a / b );
}

//to calculate the discount
function Discount(price: number, discount: number): number {
  return price - (price * discount / 100);
}
Add({a: 1, b: 2});
Subtract({a: 9, b: 2});
Mult({a: 10, b: 28});
Div({a: 90, b: 10});
Discount(100, 10);

