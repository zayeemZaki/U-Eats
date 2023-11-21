// AdminDashboard.js

import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [operation, setOperation] = useState('add'); // 'add' or 'delete'
  const [item, setItem] = useState({
    title: '',
    tags: '',
    price: '',
    stripePriceId: '',
  });
  const [deleteItem, setDeleteItem] = useState('');
  const [category, setCategory] = useState('specialWings');

  const handleOperationChange = (selectedOperation) => {
    setOperation(selectedOperation);
  };

  const handleAddItem = () => {
    axios.post('http://localhost:3000/api/addItem', { category, newItem: item })
      .then(response => {
        console.log(response.data);
        // Handle success, maybe update UI or reset form
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  };

  const handleDeleteItem = () => {
    axios.delete('http://localhost:3000/api/deleteItem', {
      data: { category, deleteItem },
    })
      .then(response => {
        console.log(response.data);
        // Handle success, maybe update UI or reset form
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItem(prevItem => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <label>
        Operation:
        <select value={operation} onChange={(e) => handleOperationChange(e.target.value)}>
          <option value="add">Add Item</option>
          <option value="delete">Delete Item</option>
        </select>
      </label>
      {operation === 'add' && (
        <div>
          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="specialWings">Special Wings</option>
              <option value="specialSandwiches">Special Sandwiches</option>
              <option value="wings">Wings</option>
              <option value="starters">Starters</option>
              <option value="sandwiches">Sandwiches</option>
              <option value="burgers">Burgers</option>
              <option value="salads">Salads</option>
            </select>
          </label>
          <br />
          <label>
            Title:
            <input type="text" name="title" value={item.title} onChange={handleItemChange} />
          </label>
          <br />
          <label>
            Tags:
            <input type="text" name="tags" value={item.tags} onChange={handleItemChange} />
          </label>
          <br />
          <label>
            Price:
            <input type="text" name="price" value={item.price} onChange={handleItemChange} />
          </label>
          <br />
          <label>
            Stripe ID:
            <input type="text" name="stripePriceId" value={item.stripePriceId} onChange={handleItemChange} />
          </label>
          <br />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      )}
      {operation === 'delete' && (
        <div>
          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="specialWings">Special Wings</option>
              <option value="specialSandwiches">Special Sandwiches</option>
            </select>
          </label>
          <br />
          <label>
            Item to Delete:
            <input type="text" value={deleteItem} onChange={(e) => setDeleteItem(e.target.value)} />
          </label>
          <br />
          <button onClick={handleDeleteItem}>Delete Item</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;



