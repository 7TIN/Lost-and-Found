
import { useEffect, useState } from 'react';
import ClaimRequest from './ClaimRequestCard';
import api from '../utils/api';

const ItemCard = ({ item }) => {
    // const [imageOpen , setImageOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [claimStatus, setClaimStatus] = useState(null);

    useEffect(()=>{
        const fetchClaims = async () => {
            try {
                const response = await api.get(`/api/v1/claim?item=${item._id}`);
                const claims = response.data.data;

                if (claims.length > 0) {
                    const approvedClaim = claims.find(claim => claim.status === 'approved');
                    const pendingClaim = claims.find(claim => claim.status === 'pending');

                    if (approvedClaim){
                        setClaimStatus('approved');
                    }else if (pendingClaim){
                        setClaimStatus('pending');
                    }else {
                        setClaimStatus('unclaimed')
                    }
            }else {
                setClaimStatus('unClaimed');
            }
        }catch (error){
            console.log('Error fetching claims:', error);
            setClaimStatus('unclaimed');
        }
    }; 
    fetchClaims();
}, [item._id]);

    return (


        <div className=" relative flex flex-col justify-between bg-white shadow-md p-4 w-full max-w-sm border-zinc-700 border shadow-zinc-700 ">
            {claimStatus && (
                <div onClick={()=> setOpen(true)} className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm cursor-pointer
                    ${claimStatus === 'approved' ? 'bg-green-200 text-green-800' : 
                      claimStatus === 'pending' ? 'bg-yellow-200 text-yellow-800' : 
                      'bg-gray-200 text-gray-800'}`}>
                    {claimStatus === 'approved' ? 'Claimed' : 
                     claimStatus === 'pending' ? 'Pending Claim' : 
                     'UnClaimed'}
                </div>
            )}

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
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative bg-white p-4 border shadow-lg max-w-md w-full h-auto z-50" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setOpen(false)} className='absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-red-600'> 
                        ✖ 
                    </button>
                    <h2 className="text-lg font-bold mb-2">{item.title}</h2> <p></p>
                    <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    <ClaimRequest itemId={item._id} />
                    
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
