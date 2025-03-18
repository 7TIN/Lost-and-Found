
import { useState } from 'react';
import ClaimItem from './ClaimItemCard';

const ItemCard = ({ item }) => {
    // const [imageOpen , setImageOpen] = useState(false);
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col justify-between cursor-pointer bg-white shadow-md p-4 w-full max-w-sm border-zinc-700 border shadow-zinc-700 " onClick={()=> setOpen(true)}>
            {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} className="w-full h-40 shadow mb-4" />
            )}
            <h2 className="text-lg font-bold mb-2">{item.title}</h2> <p className="text-lg mb-4" >{item.itemType}</p>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-gray-600 mb-2">Location: {item.location}</p>
            <p className="text-gray-600 mb-2">Date: {new Date(item.date).toLocaleDateString()}</p>
            <h3 className="text-lg font-bold mb-2">Contact Information</h3>
            <p className="text-gray-600 mb-2">Name: {item.contactName}</p>
            <p className="text-gray-600 mb-2">Email: {item.contactEmail}</p>
            <p className="text-gray-600 mb-2">Phone: {item.contactPhone}</p>

        {open && (
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="relative bg-white p-4 border shadow-lg max-w-md w-full h-auto" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setOpen(false)} className='absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-red-600'> 
                        ✖ 
                    </button>
                    <h2 className="text-lg font-bold mb-2">{item.title}</h2> <p></p>
                    <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    <ClaimItem/>
                </div>
            </div>
        )
        }
        </div>
    );
};

// {imageOpen && ( 
//     <div className="fixed inset-0 flex items-center justify-center ">
//     <div className="relative bg-white p-4 border shadow-lg w-64">
//         {/* Close Button */}
//         <button
//             onClick={() => setImageOpen(false)}
//             className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-red-600"
//         >
//             ✖
//         </button>

//         {/* Expanded Image */}
//         <img src={item.imageUrl} alt={item.title} className="w-full h-auto rounded-md" />
//     </div>
// </div>
// )}

export default ItemCard;
