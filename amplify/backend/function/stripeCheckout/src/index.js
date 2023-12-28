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
  console.log("Received event:", JSON.stringify(event, null, 2));
  console.log("Received body:", event.body);

  const { paymentMethodId, cart } = JSON.parse(event.body);
  console.log("Received cart:", JSON.stringify(cart, null, 2));

  // First, construct the line_items array from the cart
  const line_items = cart.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.title,
      },
      unit_amount: parseFloat(item.price.replace('$', '')) * 100, // amount in cents
    },
    quantity: 1,
  }));

  // Log the line items
  console.log("Line items:", JSON.stringify(line_items, null, 2));

  // Then, create a Checkout Session using the line_items array
  const session = await stripe.checkout.sessions.create({
    payment_method: paymentMethodId,
    line_items,
    mode: 'payment',
    success_url: 'https://your-website.com/success',
    cancel_url: 'https://your-website.com/cancel',
  });


  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://main.d20ukwqpkslt8j.amplifyapp.com",
      "Access-Control-Allow-Credentials": true, // if needed
      // other headers
    },
    body: JSON.stringify({ sessionId: session.id }),
  };
  };
