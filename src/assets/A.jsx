import React, { useState, useEffect } from 'react';
import Card from '../Component/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './Pages/CartContext';

function A() {
    const {state, dispatch } = useContext(CartContext)
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setData(json.products));
    }, []);

    return (
        <div className='container mx-auto'>
            <h2>product list</h2>

            <div className="grid grid-cols-3 gap-4">
               {data.map((item) => (
    <div key={item.id}>
        <Link to={`/details/${item.id}`}>
            <Card url={item.thumbnail} price={item.price} name={item.title} /> 
        </Link>
        {/* Change 'a' to 'item' here */}
        <button className='w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-150 ease-in-out cursor-pointer' onClick={() => dispatch({ type: 'addtocart', payload: item })}>
            Add to cart
        </button>
    </div>
))}
            </div>
        </div>
    );
}

export default A;