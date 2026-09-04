function handleCalculate() {
  const income = parseFloat(document.getElementById('income').value);
  const resultElement = document.getElementById('result');

  if (!isValidIncome(income)) {
    resultElement.textContent = "Please enter a valid income.";
    return;
  }

  const tax = calculateTax(income);
  const netIncome = calculateNetIncome(income, tax);

  resultElement.textContent = `Tax: ${tax.toFixed(2)} | Net Income: ${netIncome.toFixed(2)}`;
}