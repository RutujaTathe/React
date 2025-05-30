const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={resData.resImage} />
      <h3>{resData.resName}</h3>
      <h5>
        {Array.isArray(resData.cuisian)
          ? resData.cuisian.join(", ")
          : resData.cuisian}
      </h5>
      <div className="causian">
        <ul className="causian">
          <li className="rating" style={{ height: "15px", width: "35px" }}>
            {resData.ratings}
          </li>
          <li>{resData.minutes}</li>
          <li>{resData.price}</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantCard;
