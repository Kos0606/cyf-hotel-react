import React from "react";
import Bookings from "./Bookings";
import "./App.css";
//import SearchButton from "./SearchButton";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      {/* <header className="App-header">CYF Hotel</header> */}
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      {/* <SearchButton /> */}
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
