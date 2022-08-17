document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field');
    const depositAmmountString = depositField.value;
    const depositAmmount = parseFloat(depositAmmountString);
    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmountString = depositTotal.innerHTML;
    const depositTotalAmount = parseFloat(depositTotalAmountString);
    const totalAmount = depositTotalAmount + depositAmmount;
    depositTotal.innerHTML = totalAmount;

    // Total Ballence after add deposit 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const totalPrevBalance = parseFloat(totalBalanceString);
    const totalPresentBalance = totalPrevBalance + depositAmmount;
    totalBalance.innerText = totalPresentBalance

    depositField.value = '';
});

document.getElementById('withdrow-btn').addEventListener('click', function() {
    const withdrowField = document.getElementById('withdrow-field');
    const withdrowFieldString = withdrowField.value;
    const totalWithdrow = parseFloat(withdrowFieldString);

    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalString = withdrowTotal.innerText;
    const withdrowTotalAmmount = parseFloat(withdrowTotalString);

    const withdrowAmmount = totalWithdrow + withdrowTotalAmmount;
    withdrowTotal.innerText = withdrowAmmount;

    // Total Ballence after withrow deposit 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const totalPrevBalance = parseFloat(totalBalanceString);


    const totalPresentBalance = totalPrevBalance - totalWithdrow;
    totalBalance.innerText = totalPresentBalance

    
    

    withdrowField.value = '';
});