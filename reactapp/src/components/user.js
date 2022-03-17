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
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline"> {name}</h4>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{mail} </p>
          <p className="card-text">{location} </p>
        </div>
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
