
const price = 0.21;
const km = 100;
const age = 10;
const discount = 20;
let baseprice = price * km;
let finalprice = baseprice
if (age < 18) {
  const discountapplied = baseprice * (discount / 100);
  finalprice = baseprice - discountapplied;
}
console.log(finalprice.toFixed(2))

const ageoldman = 70;
const discountold = 40;
if (ageoldman >= 65) {
  const discountapplied = baseprice * (discountold / 100)
  finalprice = baseprice - discountapplied
}
console.log(finalprice.toFixed(2))

