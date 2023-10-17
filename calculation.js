function calculateLoan() {
    // Get input values
    var propertyValue = parseFloat(document.getElementById('propertyValue').value);
    var ltvPercentage = parseFloat(document.getElementById('ltvPercentage').value);
    var rentalCoverageRatio = parseFloat(document.getElementById('rentalCoverageRatio').value);
    var rentalIncome = parseFloat(document.getElementById('rentalIncome').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);

    // Perform calculations
    var maxLoanAmountLTV = propertyValue * (ltvPercentage / 100);
    var maxLoanAmountRental = propertyValue * (rentalCoverageRatio / 100);
    
    // Calculate estimated monthly payment using the lower of the two max loan amounts
    var maxLoanAmount = Math.min(maxLoanAmountLTV, maxLoanAmountRental);
    
    var monthlyInterest = (interestRate / 100) / 12;
    var loanTermMonths = 30 * 12; // Assuming a 30-year mortgage

    var monthlyPayment = (maxLoanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -loanTermMonths));

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Maximum Loan Amount (LTV): $${maxLoanAmountLTV.toFixed(2)}</p>
        <p>Maximum Loan Amount (Rental Coverage): $${maxLoanAmountRental.toFixed(2)}</p>
        <p>Estimated Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
        <p>Maximum Loan Amount (Lower of LTV and Rental Coverage): $${maxLoanAmount.toFixed(2)}</p>
    `;
}
