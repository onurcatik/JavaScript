
document.addEventListener('DOMContentLoaded', () => {
    const subscribeCheckbox = document.getElementById('subscribeCheckbox');
    const visaRadio = document.getElementById('visaRadio');
    const masterCardRadio = document.getElementById('masterCardRadio');
    const paypalRadio = document.getElementById('paypalRadio');
    const submitButton = document.getElementById('submitButton');
    const subscriptionResult = document.getElementById('subscriptionResult');
    const paymentResult = document.getElementById('paymentResult');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        if(subscribeCheckbox.checked) {
            subscriptionResult.textContent="You are subcribed";
        } else {
            subscriptionResult.textContent="You are not subcribed";
        }

        if(visaRadio.checked) {
            paymentResult.textContent="You are paying with Visa";
        } else if ( masterCardRadio.checked) {
            paymentResult.textContent="You are paying with MasterCard";
        } else if (paypalRadio.checked) {
            paymentResult.textContent="You are paying with PayPal";
        } else {
            paymentResult.textContent = 'You must select.'
        }
     

    });
});
