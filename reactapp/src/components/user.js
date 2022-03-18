import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  state = {
    isVisible: true,
  };
  static defaultProps = {
    name: "Your Name",
    mail: "Your Mail",
    location: "Your Location",
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isVisible: false,
  //   };
  // }
  onClickEvent = (number, e) => {
    console.log(number);
  };

  render() {
    //destructing
    const { name, mail, location } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 35)}>
              {" "}
              {name}
            </h4>
          </div>
        </div>
        {isVisible ? (
          <div className="card-body">
            <p className="card-text">{mail} </p>
            <p className="card-text">{location} </p>
          </div>
        ) : null}
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
