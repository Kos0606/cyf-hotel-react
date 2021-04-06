import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.order}>
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
