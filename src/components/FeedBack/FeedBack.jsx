


const FeedBack = ({feedBackData}) => {
    console.log(feedBackData);
    
    return (
          
        <div className="grid grid-cols-3 mt-4 w-[80%] mx-auto max-w-[1200px] gap-6  ">
           
            {
                feedBackData.map(feed =>
                 <div className="card bg-base-100  shadow-xl ">
                    <div className="card-body">
                        <div>
                            <img src={feed.userImage} alt="" />
                            <h2></h2>
                        </div>
                      <h2 className="card-title">{feed.name}</h2>
                      <p>{feed.review}</p>
                      <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
                      
                    </div>
                  </div>)
            }
        </div>
    );
};

export default FeedBack;