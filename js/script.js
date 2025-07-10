
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
    ticketType = "Biglietto Minorenne";
  }
  else if (eta === 'Maggiorenne') {
    const discountapplied = baseprice * (olderdiscountold / 100);
    finalprice = baseprice - discountapplied;
    ticketType = "Biglietto Maggiorenne";
  }
  console.log(finalprice.toFixed(2))
  // vagone
  const vagone = Math.floor(Math.random() * 10) + 1;
  const codice = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;


  document.getElementById('showName').innerText = name;
  document.getElementById('carriage').innerText = vagone;
  document.getElementById('cpCode').innerText = codice;
  document.getElementById('finalPrice').innerText = `${finalprice.toFixed(2)}`;

  const biglietto = document.getElementById('tipoBiglietto');
  biglietto.innerText = ticketType;
})