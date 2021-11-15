
let calculate = () => {
  const loan_amount = parseInt(document.querySelector(".loan_amount").value);
  const interest = parseInt(document.querySelector(".interest").value);
  const years = parseInt(document.querySelector(".year").value);
  let results = document.querySelector(".result");

  let answer = loan_amount * Math.pow(1 + interest / 100, years);
  results.innerHTML = `<span>${answer}</span>`;
};


