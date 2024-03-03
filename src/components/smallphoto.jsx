import React from "react";

function SmallScreenPhoto() {
    return (
        <div className="bg-gray-300 hover:bg-gray-400 rounded-lg p-4 transition-colors duration-200 ease-in-out">
            <img className="object-cover w-full h-full align-middle mb-[-14px]" src="images/me-sm.png" alt="Description" />
        </div>
    );
}

export default SmallScreenPhoto;