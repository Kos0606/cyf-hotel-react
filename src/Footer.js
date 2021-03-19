import React from "react";

const Footer = props => {
  console.log(props);
  return (
    <div>
      <footer>
        <ul>
          {props.address.map(location => (
            <li>{location}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
