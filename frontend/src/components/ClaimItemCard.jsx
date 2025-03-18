const ClaimItem = () => {
    const handleSubmit = async(e) =>{
        e.preventDefult();

        try{
            const claimItem = {
                Name,
                ContactNo,
                Email,
                Description,
                ProfImgUrl,
            }
        }catch(error){
            console.error(error);}
    }

    return (
        <div className="max-w-full mx-auto mt-6 bg-white rounded-lg shadow-md p-4">
            <h1 className="text-lg font-bold mb-4">Claim Item</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <input type="email" placeholder="Email" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <input type="text" placeholder="Contact Number" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <input type="text" placeholder="Description" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <input type="text" placeholder="Image" className="block w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                <button type="submit" className="ml-33 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Sumbit </button>
            </form>
        </div>
    )
}

export default ClaimItem;

