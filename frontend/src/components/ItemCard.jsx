import React from 'react';

const ItemCard = ({ item }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 w-full max-w-sm">
            {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover mb-4" />
            )}
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-gray-600 mb-2">Location: {item.location}</p>
            <p className="text-gray-600 mb-2">Date: {new Date(item.date).toLocaleDateString()}</p>
            <h3 className="text-lg font-bold mb-2">Contact Information</h3>
            <p className="text-gray-600 mb-2">Name: {item.contactName}</p>
            <p className="text-gray-600 mb-2">Email: {item.contactEmail}</p>
            <p className="text-gray-600 mb-2">Phone: {item.contactPhone}</p>
        </div>
    );
};

export default ItemCard;
