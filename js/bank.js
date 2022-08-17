document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field');
    const depositAmmount = depositField.value;
    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmount = depositTotal.innerHTML;
    depositTotal.innerHTML = depositAmmount;
});