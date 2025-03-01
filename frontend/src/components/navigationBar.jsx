import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav className="bg-blue-500 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">My Website</h1>
            <div>
                <Link to="/" className="mx-2">Home</Link>
                {user ? (
                    <>
                        <Link to="/profile" className="mx-2">Profile</Link>
                        <Link to="/logout" className="mx-2">Logout</Link>
                    </>
                ) : (
                    <Link to="/login" className="mx-2">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
