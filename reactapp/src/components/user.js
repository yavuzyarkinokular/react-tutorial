import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  static defaultProps = {
    name: "Your Name",
    mail: "Your Mail",
    location: "Your Location",
  };
  render() {
    const { name, mail, location } = this.props;

    return (
      <div>
        <ul>
          <li>İsminiz: {name}</li>
          <li>Mail Adresiniz: {mail} </li>
          <li>Yaşadığınız şehir: {location} </li>
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
User.defaultProps = {};
export default User;
