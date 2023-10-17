function calculateLoan() {
    // Get input values
    var propertyValue = parseFloat(document.getElementById('propertyValue').value);
    var ltvPercentage = parseFloat(document.getElementById('ltvPercentage').value);
    var rentalCoverageRatio = parseFloat(document.getElementById('rentalCoverageRatio').value);

    // Perform calculations
    var maxLoanAmount = propertyValue * (ltvPercentage / 100);
    var minRentalIncome = propertyValue * (rentalCoverageRatio / 100);

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Maximum Loan Amount: $${maxLoanAmount.toFixed(2)}</p>
        <p>Minimum Rental Income Required: $${minRentalIncome.toFixed(2)}</p>
    `;
}
