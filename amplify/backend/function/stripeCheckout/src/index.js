const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// stripeCheckout.js (serverless function)
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

exports.handler = async (event) => {
  console.log("Received event body:", event.body);


  const { paymentMethodId, cart } = JSON.parse(event.body);

  // Create a Checkout Session
  const session = await stripe.checkout.sessions.create({
    payment_method: paymentMethodId,
    line_items: cart.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
        },
        unit_amount: parseFloat(item.price.replace('$', '')) * 100, // amount in cents
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: 'https://your-website.com/success',
    cancel_url: 'https://your-website.com/cancel',
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: session.id }),
  };
};
