import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState(false);

  const profileSearch = () => {
    console.log(props.id);
    if (profile !== props.id) {
      return setProfile(props.id);
    } else return setProfile(false);
  };
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (profile === props.id) return setProfile(data);
      });
  }, [profile, props.id]);
  return (
    <>
      <td>
        <button className="btn btn-primary" onClick={profileSearch}>
          Show Profile
        </button>
      </td>

      <td>
        <ul className={profile ? "d-block" : "d-none"}>
          <li>id: {profile.id}</li>
          <li>title: {profile.title}</li>
          <li>first name: {profile.firstName}</li>
          <li>surname: {profile.surname}</li>
          <li>email: {profile.email}</li>
          <li>phone number: {profile.phoneNumber}</li>
          <li>VIP: {`${profile.vip}`}</li>
        </ul>
      </td>
    </>
  );
};

export default CustomerProfile;
