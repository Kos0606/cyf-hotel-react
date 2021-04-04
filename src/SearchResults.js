import React from "react";

const SearchResults = props => {
  function createTableHeader() {
    let header = Object.keys(props.GuestInfo[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  function createTableData() {
    return props.GuestInfo.map((guest, index) => {
      return (
        <tr key={index}>
          <td>{guest.id}</td>
          <td>{guest.title}</td>
          <td>{guest.firstName}</td>
          <td>{guest.surname}</td>
          <td>{guest.email}</td>
          <td>{guest.roomId}</td>
          <td>{guest.checkInDate}</td>
          <td>{guest.checkOutDate}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <h2 id="title">Hotel Bookings</h2>

      <table className="table">
        <tbody>
          <tr>{createTableHeader()}</tr>
          {createTableData()}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
