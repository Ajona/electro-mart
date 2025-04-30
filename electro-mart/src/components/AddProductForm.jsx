import { useState } from 'react';
import Swal from 'sweetalert2';

function AddProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, price: parseFloat(formData.price) })
    })
      .then(res => res.json())
      .then(() => {
        Swal.fire('Success', 'Product added successfully!', 'success');
        setFormData({ name: '', description: '', price: '', image: '' });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;

