import React, { useEffect, useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { CartContext } from '../assets/Pages/CartContext';

function Header() {
  const { state } = useContext(CartContext); 

  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories').then(res => res.json()).then(data => setCategories(data));
  }, []);

  return (
    <header className='con py-4'>
      <div className='flex justify-between items-center md:px-15'>
        <div>
          <img className='w-40' src="/src/assets/logo.webp" alt="Logo" />
        </div>

        <ul className="flex gap-6 items-center text-sm font-light">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About us</Link></li>
          
          {categories.slice(1, 6).map((cat) => (
            <li key={cat.slug}>
              <Link to={`/category/${cat.slug}`} className="hover:text-gray-600">
                {cat.name}
              </Link>
            </li>
          ))}

          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Cart">Cart ({state.cart.length})</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;