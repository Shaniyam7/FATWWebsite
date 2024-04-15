// Get the elements
const readMoreBtn = document.getElementById('readMore');
const moreInfo = document.getElementById('moreInfo');

// Add event listener
readMoreBtn.addEventListener('click', function() {
    if (moreInfo.style.display === 'none' || !moreInfo.style.display) {
        moreInfo.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreInfo.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});
// Newsletter subscription form validation
const emailInput = document.querySelector('.newsletter input[type="email"]');
const joinBtn = document.querySelector('.newsletter button');
const errorText = document.querySelector('.error-text');

joinBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    if (!isValidEmail(emailInput.value)) {
        errorText.textContent = 'Please enter a valid email address!';
        errorText.style.display = 'block';
    } else {
        errorText.textContent = ''; // Clear error message
        errorText.style.display = 'none'; // Hide error message

        alert('Thank you for subscribing!');
        // Send subscription request to server
        // Code to send subscription request goes here
    }
});

function isValidEmail(email) {
    // Regular expression for validating email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
