import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Welcome to ElectroMart</h2>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<AddProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;

