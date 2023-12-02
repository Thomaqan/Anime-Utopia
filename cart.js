function validateForm() {
    // Validate card number
    const cardNumberInput = document.getElementById('cardNumber');
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumberInput.value)) {
        alert('Please enter a valid 16-digit card number.');
        return false;
    }

    const cityInput = document.getElementById('city');
    const zipCodeInput = document.getElementById('zipCode');
    const countryInput = document.getElementById('country');

    if (cityInput.value.trim() === '' || zipCodeInput.value.trim() === '' || countryInput.value.trim() === '') {
        alert('Please enter all required shipping address fields.');
        return false;
    }

    // If all validations pass, you can proceed with the form submission
    return true;
}
