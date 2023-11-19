require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static("public"));


const cors = require("cors");
app.use(cors());

// const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://localhost:5500",
//   })
// );

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);



app.post('/create-checkout-session', async (req, res) => {
  try {
    const { cart } = req.body;

    // Log incoming request data for debugging
    console.log('Received request with cart:', cart);

    const lineItems = cart.map(item => ({
      price: item.stripePriceId, // Provide the Price ID for each item
      quantity: item.quantity,
    }));

    if (lineItems.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success', // Replace with  success URL
      cancel_url: 'http://localhost:3000/cancel', // Replace with  cancel URL
    });

    // Log success and session details for debugging
    console.log('Checkout session created:', session);

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    // Log detailed error information for debugging
    console.error('Error creating checkout session:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
