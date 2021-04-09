import React, { useState } from "react";
import moment from "moment";

const TableData = props => {
  const [color, setColor] = useState(null);

  const highlight = e => {
    if (e.target.parentElement.style.backgroundColor !== "green") {
      setColor((e.target.parentElement.style.backgroundColor = "green"));
    } else return (e.target.parentElement.style.backgroundColor = "white");
  };
  return (
    <tbody>
      {props.GuestInfo.map((guest, index) => {
        const checkIn = moment(guest.checkInDate);
        const checkOut = moment(guest.checkOutDate);
        const days = checkOut.diff(checkIn, "days");
        return (
          <tr className={color} key={index} onClick={highlight}>
            <th scope="row">{guest.id}</th>
            <td>{guest.title}</td>
            <td>{guest.firstName}</td>
            <td>{guest.surname}</td>
            <td>{guest.email}</td>
            <td>{guest.roomId}</td>
            <td>{guest.checkInDate}</td>
            <td>{guest.checkOutDate}</td>
            <td>{days}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableData;
