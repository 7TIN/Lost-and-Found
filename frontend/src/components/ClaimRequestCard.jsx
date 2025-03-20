import { useState } from "react";
import api from "../utils/api";

const ClaimRequest = ({ itemId, onSuccess }) => {
    const [claimantName,setClaimantName] = useState('');
    const [claimantPhone, setClaimantPhone] = useState('');
    const [claimantEmail, setClaimantEmail] = useState('');
    const [description, setClaimantDescription] = useState('');
    const [profImageUrl, setProfImageUrl] = useState('');
    const handleSubmit = async(e) =>{

        e.preventDefault();

        try{
            const claimItem = {
                itemId,
                claimantName,
                claimantPhone,
                claimantEmail,
                description,
                profImageUrl,
            }
            const response = await api.post('/api/v1/claim', claimItem);
            
            if (response.status === 201){
                console.log('successful');
                onSuccess();
            }
        }catch(error){
            console.error(error);}
    }

    return (
        <div className="max-w-full mx-auto mt-6 bg-white rounded-lg shadow-md p-4">
            <h1 className="text-lg font-bold mb-4">Claim Item</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=> setClaimantName(e.target.value)} placeholder="Name" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <input type="email" onChange={(e) => setClaimantEmail(e.target.value)} placeholder="Email" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <input type="text" onChange={(e) => setClaimantPhone(e.target.value)} placeholder="Contact Number" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <input type="text" onChange={(e) => setClaimantDescription(e.target.value)} placeholder="Description" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <input type="text" onChange={(e) => setProfImageUrl(e.target.value)} placeholder="Image" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <button type="submit" className="ml-33 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-4 rounded"> Submit </button>
            </form>
        </div>
    )
}

export default ClaimRequest;

