document.getElementById('login').addEventListener('click', function() {
    const entairEmail = document.getElementById('your-email');
    const yourEmail = entairEmail.value;
    
    const entairPassword = document.getElementById('your-password');
    const yourPassword = entairPassword.value;
    
    if(yourEmail === 'info@mehedi.com' && yourPassword === 'Mehedi') {
        window.location.href='bank.html';
    } else {
        alert('Invalid User Name or Password');
    }
});