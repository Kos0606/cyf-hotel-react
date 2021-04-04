import React from "react";

const Footer = props => {
  return (
    <div>
      <footer>
        <ul>
          {props.address.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
