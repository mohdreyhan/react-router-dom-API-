import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <p>Name : Reyhan</p>
        <p>age : 24</p>
        <p>contact : 9030150094</p>
        <Link to = "/">Home Page</Link>
        <Link to = "/contact">Contact Us</Link>

      </div>
    );
  }
}

export default Profile;
