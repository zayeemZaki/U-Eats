const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

// Creating an AWS Serverless Express server
const server = awsServerlessExpress.createServer(app);

exports.handler = async (event) => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));
    const { paymentMethodId, cart } = JSON.parse(event.body);
    console.log("Received cart:", JSON.stringify(cart, null, 2));

    // Construct the line_items array from the cart
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

    // Create a Checkout Session using the line_items array
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'https://your-website.com/success',
      cancel_url: 'https://your-website.com/cancel',
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        // Other headers if necessary
      },
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error('Error:', error);

    // Return error response with CORS headers
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        // other headers as needed
      },
            body: JSON.stringify({ error: error.message }),
    };
  }
};
