import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <li>
        <RestaurantButton order={orderOne} />
        {props.orderType}: {orders}
      </li>
    </div>
  );
};

export default Order;
