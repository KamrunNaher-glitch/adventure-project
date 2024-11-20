import React from 'react';

const AdventureCard = ({adventure}) => {
    console.log(adventure);
    const {adventureTitle,image,ecoFriendlyFeatures} = adventure;
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
      <button className='badge badge-outline bg-blue-700 text-white p-4'>Explore Now</button>
    </div>
  </div>
</div>
    );
};

export default AdventureCard;