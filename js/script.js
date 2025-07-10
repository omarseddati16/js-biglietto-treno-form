
// bottone
const button = document.getElementById('Biglietto');

// campi
button.addEventListener('click', function (e) {
  e.preventDefault();

  const name = document.getElementById('identita').value
  const km = document.getElementById('km').value
  const eta = document.getElementById('age').value

  console.log(name)
  console.log(eta)
  console.log(km)
  // Calcolo
  const price = 0.21;
  const mintordiscount = 20;
  const olderdiscountold = 40;
  let baseprice = price * km;
  let finalprice = baseprice
  if (eta === 'Minorenne') {
    const discountapplied = baseprice * (mintordiscount / 100);
    finalprice = baseprice - discountapplied;
  }
  else if (eta === 'Maggiorenne') {
    const discountapplied = baseprice * (olderdiscountold / 100);
    finalprice = baseprice - discountapplied;
  }
  console.log(finalprice.toFixed(2))
  document.getElementById('').innerText =
    document.getElementById('').innerText =
    document.getElementById('').innerText =

})