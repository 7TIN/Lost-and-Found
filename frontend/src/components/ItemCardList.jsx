import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard.jsx';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5500/api/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <ItemCard key={item._id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
