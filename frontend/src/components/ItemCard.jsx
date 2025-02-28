import React, { useState } from 'react';

const ItemCard = ({ item }) => {
    const [imageOpen , setImageOpen] = useState(false);
    return (
        <div className="flex flex-col justify-between bg-white shadow-md p-4 w-full max-w-sm border-zinc-700 border shadow-zinc-700 ">
            {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} className="w-full h-40 shadow cursor-pointer mb-4" onClick={ ()=> setImageOpen(true)}/>
            )}
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-gray-600 mb-2">Location: {item.location}</p>
            <p className="text-gray-600 mb-2">Date: {new Date(item.date).toLocaleDateString()}</p>
            <h3 className="text-lg font-bold mb-2">Contact Information</h3>
            <p className="text-gray-600 mb-2">Name: {item.contactName}</p>
            <p className="text-gray-600 mb-2">Email: {item.contactEmail}</p>
            <p className="text-gray-600 mb-2">Phone: {item.contactPhone}</p>

            {imageOpen && ( 
                <div className="fixed inset-0 flex items-center justify-center ">
                <div className="relative bg-white p-4 border shadow-lg w-64">
                    {/* Close Button */}
                    <button
                        onClick={() => setImageOpen(false)}
                        className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-red-600"
                    >
                        ✖
                    </button>

                    {/* Expanded Image */}
                    <img src={item.imageUrl} alt={item.title} className="w-full h-auto rounded-md" />
                </div>
            </div>
        )}
        </div>

        
    );
};

export default ItemCard;
