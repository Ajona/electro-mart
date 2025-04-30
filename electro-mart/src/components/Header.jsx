import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>ElectroMart</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </nav>
    </header>
  );
}

export default Header;

