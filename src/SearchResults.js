import React, { useState } from "react";
import FakeBookings from "./data/fakeBookings.json";
//import moment from "moment";
import TableData from "./TableData";

const SearchResults = props => {
  return (
    <table>
      <thead>
        <tr>
          {props.tableHead.map((key, index) => {
            return <th key={index}>{key}</th>;
          })}
        </tr>
      </thead>
      <TableData GuestInfo={props.GuestInfo} />
    </table>
  );
};

export default SearchResults;
