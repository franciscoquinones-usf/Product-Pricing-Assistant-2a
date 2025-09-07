// Coding Challenge 02a

// Code goes here

// Variables

const productname = "\"Dove Mens Soap\"";
    console.log("The product name of what we are evaluating is", productname);
let costPerUnit = 12.5;
let basePrice = 19.99;
let discountRate = 0.15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 3000;

// Calculations

let discountedPrice = basePrice * (1-discountRate);
discountedPrice = parseFloat(discountedPrice.toFixed(2));
    console.log(`Discounted Price (before tax): $${discountedPrice}`);
    
let finalPriceWithTax = discountedPrice * (1+salesTaxRate);
finalPriceWithTax = parseFloat(finalPriceWithTax.toFixed(2));
    console.log(`Final Price with Tax: $${finalPriceWithTax}`);  

let profitPerUnit = finalPriceWithTax - costPerUnit;
profitPerUnit = parseFloat(profitPerUnit.toFixed(2));
    console.log(`Profit Per Unit: $${profitPerUnit}`);

let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
    console.log("Breakeven Units:", breakEvenUnits);

let isProfitablePerUnit = profitPerUnit > 0;
    console.log("Per-Unit profitability:", isProfitablePerUnit);