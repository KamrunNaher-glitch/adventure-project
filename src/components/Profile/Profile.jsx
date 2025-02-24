import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(authContext);

    if (!user) {
        return <p className="text-center text-red-500 mt-10">No user data found.</p>;
    }

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
            <h1 className="text-2xl font-bold text-center text-gray-800">
                Welcome, {user.displayName || "User"}!
            </h1>
            
            <div className="flex flex-col items-center mt-6">
                <img 
                    src={user.photoURL || "https://via.placeholder.com/150"} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full border-4 border-gray-300"
                />
                <p className="mt-4 text-lg font-semibold">Name: {user.displayName || "N/A"}</p>
                <p className="text-gray-600">Email: {user.email || "N/A"}</p>
            </div>

            {/* Update Profile Button */}
            <div className="text-center mt-6">
                <Link to="/update-profile">
                    <button className="btn btn-primary px-6">Update Profile</button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;
