document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.addtocart');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const product = button.closest('.product');
            const priceElement = product.querySelector('p:last-of-type');
            const price = parseFloat(priceElement.textContent);
            const totalPriceElement = document.getElementById('totalprice');
            let totalPrice = parseFloat(totalPriceElement.textContent);
            totalPrice += price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
    const clearButton = document.getElementById('clearbutton');
    clearButton.addEventListener('click', function() {
        const totalPriceElement = document.getElementById('totalprice');
        totalPriceElement.textContent = '0.00';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginform');
    const signupForm = document.getElementById('signupform');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log("Login - Username:", username, "Password:", password);
    });
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newUsername = document.getElementById('newusername').value;
        const newPassword = document.getElementById('newpassword').value;
        console.log("Sign Up - New Username:", newUsername, "New Password:", newPassword);   
    });
});
