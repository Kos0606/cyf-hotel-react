import React, { useState, useEffect } from "react";
import Search from "./SearchButton";
import SearchResults from "./SearchResults";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  //const [bookings, setBookings] = useState(FakeBookings);

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const makeBookings = bookings.filter(el => {
      return (
        el.firstName.toLowerCase().includes(searchVal) ||
        el.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(makeBookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setIsLoading(true);
        // if (data.error) {
        //   setIsError(true);
        //   setIsLoading(false);
        // } else {
        //   setBookings(data);
        //   setIsLoading(false);
        // }
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <h2 id="title">Hotel Bookings</h2>
        <SearchResults
          GuestInfo={bookings}
          tableHead={[
            "id",
            "title",
            "first name",
            "surname",
            "email",
            "room id",
            "check in date",
            "check out date",
            "staying for",
            "profile"
          ]}
        />
      </div>
    </div>
  );
};

export default Bookings;
