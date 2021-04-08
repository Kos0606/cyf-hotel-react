import React, { useState, useEffect } from "react";
import Search from "./SearchButton";
import SearchResults from "./SearchResults";
//import FakeBookings from "./data/fakeBookings.json";
// import SearchResults from "./SearchResults.js";

const Bookings = () => {
  //const [bookings, setBookings] = useState(FakeBookings);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(bookings => data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults GuestInfo={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
