import React, { useState } from 'react';
import NewItemCard from '@/components/NewItemCard';

// Sample data for demonstration
const sampleItem = {
  id: '1',
  title: 'Blue Bottle',
  description: 'A blue water bottle with a sticker on it. Last seen in the university library on the second floor.',
  imageUrl: 'https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  location: 'University Library',
  date: '2023-07-15',
  contactName: 'John Doe',
  contactEmail: 'john.doe@example.com',
  contactPhone: '(555) 123-4567',
  itemType: 'LostItem',
};

const Index = () => {
  console.log("Parent sampleItem:", sampleItem);
  const [claimStatus, setClaimStatus] = useState('unclaimed');
  
  // Function to cycle through different claim statuses for demonstration
  const cycleClaimStatus = () => {
    if (claimStatus === 'unclaimed') setClaimStatus('pending');
    else if (claimStatus === 'pending') setClaimStatus('approved');
    else setClaimStatus('unclaimed');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 p-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Lost & Found Item</h1>
          
          <div className="flex justify-center ">
            <NewItemCard item={sampleItem} claimStatus={claimStatus} onClaimClick={cycleClaimStatus}/>
          </div>
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Click the status badge to cycle through different claim states</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;