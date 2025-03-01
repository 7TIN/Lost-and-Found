import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import { useContext, useEffect } from "react";

const HomePage = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="text-center py-20 bg-blue-500 text-white">
                <h1 className="text-4xl font-bold">Lost Something? Found Something?</h1>
                <p className="mt-4 text-lg">Report lost items or help others find their belongings.</p>
                <div className="mt-6">
                    <Link to="/report" className="px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-md hover:bg-gray-200">
                        Report Lost Item
                    </Link>
                    <Link to="/items" className="ml-4 px-6 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-600">
                        View Lost Items
                    </Link>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="p-10 text-center">
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <p className="text-gray-700 max-w-xl mx-auto">
                    If you lost an item, report it here. If you found an item, you can help return it to the rightful owner.  
                    Our system makes it easy for people to find lost items in your community.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
