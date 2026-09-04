const {
  calculateTax,
  applyDeduction,
  calculateNetIncome,
  isValidIncome,
} = require("../src/taxCalculator");

describe("Tax Calculator", function () {
  it("should calculate 5% tax for income up to 10000", function () {
    expect(calculateTax(10000)).toBe(500);
  });

  it("should calculate 10% tax for income between 10001 and 50000", function () {
    expect(calculateTax(20000)).toBe(2000);
  });

  it("should calculate 20% tax for income above 50000", function () {
    expect(calculateTax(60000)).toBe(12000);
  });

  it("should apply deduction correctly", function () {
    expect(applyDeduction(50000, 10000)).toBe(40000);
  });

  it("should not return negative taxable income after deduction", function () {
    expect(applyDeduction(5000, 10000)).toBe(0);
  });

  it("should calculate net income correctly", function () {
    expect(calculateNetIncome(50000, 5000)).toBe(45000);
  });

  it("should validate income correctly", function () {
    expect(isValidIncome(50000)).toBe(true);
    expect(isValidIncome(-100)).toBe(false);
  });
});
