import React from "react";
import Search from "./SearchButton";
import SearchResults from "./SearchResults";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          SearchResults={SearchResults}
          GuestInfo={[
            {
              id: 1,
              title: "Mr",
              firstName: "John",
              surname: "Doe",
              email: "johndoe@doe.com",
              roomId: 2,
              checkInDate: "2017-11-21",
              checkOutDate: "2017-11-23",
              numberOfNights: ""
            },
            {
              id: 2,
              title: "Doctor",
              firstName: "Sadia",
              surname: "Begum",
              email: "begum_sadia@sadia.org",
              roomId: 1,
              checkInDate: "2018-02-15",
              checkOutDate: "2018-02-28",
              numberOfNights: ""
            },
            {
              id: 3,
              title: "Prince",
              firstName: "Henry",
              surname: "Wales",
              email: "harry@wales.com",
              roomId: 5,
              checkInDate: "2018-03-01",
              checkOutDate: "2018-04-09",
              numberOfNights: ""
            },
            {
              id: 4,
              title: "Dame",
              firstName: "Judi",
              surname: "Dench",
              email: "Judi@dench.co.uk",
              roomId: 6,
              checkInDate: "2017-12-25",
              checkOutDate: "2018-01-03",
              numberOfNights: ""
            },
            {
              id: 5,
              title: "Madam",
              firstName: "Anuradha",
              surname: "Selvam",
              email: "anu@selvam.net",
              roomId: 3,
              checkInDate: "2017-08-30",
              checkOutDate: "2017-10-02",
              numberOfNights: ""
            }
          ]}
        />
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
