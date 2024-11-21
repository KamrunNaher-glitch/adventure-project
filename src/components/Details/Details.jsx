import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { authContext } from '../AuthProvider/AuthProvider';

const Details = () => {
    const {adventureTitle,categoryName,shortDescription,adventureCost,location,duration,image}= useLoaderData()
    const contextValue =useContext(authContext)
    console.log(contextValue)
    return (
        <div className="card card-compact bg-base-100  shadow-xl mt-5">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">{adventureTitle}</h2>
    <p className='font-bold'>{categoryName}</p>
    <p>{shortDescription}</p>
    <p>{adventureCost}$</p>
    <p>{location}</p>
    <p>{duration}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>document.getElementById('my_modal_5').showModal()}
       className="btn btn-primary">Talk To Expert</button>
    </div>
  </div>
        <Modal></Modal>
</div>
    );
};

export default Details;


