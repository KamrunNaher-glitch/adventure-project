import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { authContext } from '../AuthProvider/AuthProvider';

const Details = () => {
    const {adventureTitle,categoryName,shortDescription,adventureCost,location,duration,image}= useLoaderData()
    const contextValue =useContext(authContext)
    console.log(contextValue)
    return (
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-10">
      <figure className="w-full">
        <img src={image} alt={adventureTitle} className="w-full h-64 object-cover" />
      </figure>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{adventureTitle}</h2>
        <p className="text-lg font-semibold text-indigo-600 mt-2">{categoryName}</p>
        <p className="text-gray-600 mt-3">{shortDescription}</p>
        <div className="flex justify-center items-center gap-4 mt-4 text-gray-700">
          <span className="text-lg font-medium">${adventureCost}</span>
          <span>•</span>
          <span>{location}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Talk To Expert
        </button>
      </div>
      <Modal />
    </div>
    );
};

export default Details;


