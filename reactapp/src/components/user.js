import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  render() {
    const { name, mail, location } = this.props;

    return (
      <div>
        <ul>
          <li>{name}</li>
          <li>{mail} </li>
          <li>{location} </li>
        </ul>
      </div>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
User.defaultProps = {
  name: "Your Name",
  mail: "Your Mail",
  location: "Your Location",
};
export default User;
