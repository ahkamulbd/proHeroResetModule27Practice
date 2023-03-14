//console.log('Linked JS');

// Step 1: add click event handler with submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log('This is click event');

    // Step 2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    // Step3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(email, password);

    // DANGER: Don't verify email password on the client side
    // Step 4: Verify email and password

    if (email === 'abc@xyz.com' && password === '12345') {
        console.log('Valid User');
    }
    else {
        console.log('Invalid User');
    }
})