import React, { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [items, setItems] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    quantity: "",
    status: ""
  });

  // Get items
  const getItems = async () => {
    const res = await API.get("/");
    setItems(res.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add item
  const addItem = async () => {
    await API.post("/", form);
    getItems();
  };

  // Delete item
  const deleteItem = async (id) => {
    await API.delete(`/${id}`);
    getItems();
  };

  // Update item
  const updateItem = async (id) => {
    const name = prompt("Enter name:");
    const price = prompt("Enter price:");
    const category = prompt("Enter category:");
    const description = prompt("Enter description:");
    const quantity = prompt("Enter quantity:");
    const status = prompt("Enter status:");

    await API.put(`/${id}`, {
      name,
      price,
      category,
      description,
      quantity,
      status
    });

    getItems();
  };

  return (
    <div>
      <h1>Item Management</h1>

      {/* Form */}
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" onChange={handleChange} />
      <input name="status" placeholder="Status" onChange={handleChange} />

      <button onClick={addItem}>Add Item</button>

      {/* Items list */}
      {items.map((item) => (
        <div key={item._id}>
          <p>{item.name} - {item.price}</p>
          <button onClick={() => deleteItem(item._id)}>Delete</button>
          <button onClick={() => updateItem(item._id)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default App;