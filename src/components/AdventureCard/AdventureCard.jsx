import React from 'react';
import { NavLink } from 'react-router-dom';

const AdventureCard = ({adventure}) => {
    console.log(adventure);
    const {adventureTitle,image,ecoFriendlyFeatures,id} = adventure;
    return (
        <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {adventureTitle}
      
    </h2>
    <p>{ecoFriendlyFeatures}</p>
    <div className="card-actions ">
      <NavLink to={`/Details/${id}`}>
      <button className='badge badge-outline bg-blue-700 text-white p-4'>Explore Now</button>
      </NavLink>
    </div>
  </div>
</div>
    );
};

export default AdventureCard;