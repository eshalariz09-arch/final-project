function calculateTax(income) {
  if (income <= 10000) {
    return income * 0.05;
  } else if (income <= 50000) {
    return income * 0.10;
  } else {
    return income * 0.20;
  }
}

function applyDeduction(income, deduction) {
  const taxableIncome = income - deduction;
  return taxableIncome > 0 ? taxableIncome : 0;
}

function calculateNetIncome(income, tax) {
  return income - tax;
}

function isValidIncome(income) {
  return typeof income === 'number' && income >= 0;
}