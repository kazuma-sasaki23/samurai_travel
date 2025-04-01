const stripe = Stripe('pk_test_51R8O3lR5AzMioKlx4PjMPYh6X0yyH6YgB5X4Wr5TvREb239EpZjz94pSbSXAIJ2PqZpkuDOzRfIyAGif3NjmPQUh00S3h2B3a5');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});