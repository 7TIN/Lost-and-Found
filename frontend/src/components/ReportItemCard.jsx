import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";
import api from "../utils/api.js";
const ReportItemCard = () => {

    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();

    const [itemType , setItemType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [imageUrl , setImageUrl] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const itemData = {
                title,
                description,
                location,
                date,
                contactName,
                contactEmail,
                contactPhone,
                imageUrl,
            };

            if (itemType === 'Found'){
                const response = await api.post('/api/v1/found', itemData);
                if (response.status === 201){
                    console.log("Successful!");
                }
            }
            else if (itemType === 'Lost'){
                const response = await api.post('/api/v1/lost', itemData);
                if (response.status === 201){
                    console.log("Successful");
                }
            }

        }catch (error){
            console.error(error);
        }
    }

    return (
        <div className="max-w-sm mx-auto mt-6 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-4">Report an Item</h2>
            <form onSubmit={handleSubmit}>
                <select value={itemType} onChange={(e) => setItemType(e.target.value)} className="block w-full p-2 mb-4 border border-gray-300 rounded-md">
                    <option value="">Select Item Type</option>
                    <option value="Found">Report Found Item</option>
                    <option value="Lost">Report Lost Item</option>
                </select>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="block w-full p-2 mb-4 border border-gray-300 rounded-md" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="block w-full p-2 mb-4 border border-gray-300 rounded-md" />
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="block w-full p-2 mb-4 border border-gray-300 rounded-md" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" className="block w-full p-2 mb-4 border border-gray-300 rounded-md" />
                <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Contact Name" className="block w-full p-2 mb-4 border border-gray-300 rounded-md" />
                <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="Contact Email" className="block w-full p-2 mb-4 border border-gray-300 rounded-md" />
                <input type="text" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="Contact Phone" className="block w-full p-2 mb-4 border border-gray-300 rounded-md" />
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image Url" className="block w-full p-2 mb-4 border border-gray-300 rounded-md" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
};

export default ReportItemCard;

