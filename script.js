document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate username    
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const username= usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;
        const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        if (password.length < 8) {    
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
            
        }

        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent =`"Registration Successful!"`;
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with <br>
            feedbackDiv.style.color = "#dc3545"; // Error color
        }
});
});