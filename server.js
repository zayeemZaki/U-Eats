
require("dotenv").config();

const express = require("express");
const fs = require('fs');
const path = require('path');
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const data = require('./src/constants/data'); // Import your existing data

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));



app.get('/api/specialWings', (req, res) => {
  res.json(data.specialWings);
});

app.get('/api/specialSandwiches', (req, res) => {
  res.json(data.specialSandwiches);
});

app.post('/api/addItem', (req, res) => {
  const { category, newItem } = req.body;

  if (category === 'specialWings') {
    data.specialWings.push(newItem);
    console.log("Added new item to specialWings:", newItem);

    // Save the updated data to the file
    saveDataToFile(data);
  } 
  else if (category === 'specialSandwiches') {
    data.specialSandwiches.push(newItem);
    console.log("Added new item to specialSandwiches:", newItem);

    // Save the updated data to the file
    saveDataToFile(data);
  }

  res.json({ success: true });
});

function saveDataToFile(data) {
  const filePath = path.join(__dirname, 'src', 'constants', 'data.js');
  const fileContent = `module.exports = ${JSON.stringify(data, null, 2)};\n`;

  fs.writeFileSync(filePath, fileContent);

  console.log('Data saved to file:', filePath);
}

app.delete('/api/deleteItem', (req, res) => {
  const { category, deleteItem } = req.body;

  if (category === 'specialWings') {
    // Find the index of the item to delete
    const indexToDelete = data.specialWings.findIndex(item => item.title === deleteItem);

    if (indexToDelete !== -1) {
      // Remove the item from the array
      data.specialWings.splice(indexToDelete, 1);
      console.log(`Deleted item "${deleteItem}" from specialWings`);

      // Save the updated data to the file
      saveDataToFile(data);
    } 
    else {
      console.log(`Item "${deleteItem}" not found in specialWings`);
    }
  } 
  else if (category === 'specialSandwiches') {
    // Find the index of the item to delete
    const indexToDelete = data.specialSandwiches.findIndex(item => item.title === deleteItem);

    if (indexToDelete !== -1) {
      // Remove the item from the array
      data.specialSandwiches.splice(indexToDelete, 1);
      console.log(`Deleted item "${deleteItem}" from specialSandwiches`);

      // Save the updated data to the file
      saveDataToFile(data);
    } 
    else {
      console.log(`Item "${deleteItem}" not found in specialSandwiches`);
    }
  }

  res.json({ success: true });
});

app.post('/checkout', async (req, res) => {
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
      success_url: 'http://localhost:3001/success', // Replace with  success URL
      cancel_url: 'http://localhost:3001/cancel', // Replace with  cancel URL
    });

    // Log success and session details for debugging
    console.log('Checkout session created:', session);

    res.json({ id: session.id, url: session.url });
  } 
  catch (error) {
    // Log detailed error information for debugging
    console.error('Error creating checkout session:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

