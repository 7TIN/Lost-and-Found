import { useState, useEffect } from 'react';
// import axios from 'axios';
import ItemCard from './ItemCard.jsx';
import api from '../utils/api.js';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get('/api/v1/items')
            .then(response => {
                if (response.data.success && response.data.data) {
                    setItems(response.data.data);
                } else {
                    setError('Failed to fetch items');
                }
            })
            .catch(error => {
                setError('Failed to fetch items');
                console.error(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='max-w-screen mx-auto p-5 sm:p-10 md:p-16 '>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {items.map((item) => (
                <ItemCard key={item._id} item={item} />
            ))}
        </div>
        </div>
    );
};

export default ItemList;
