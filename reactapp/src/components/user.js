import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.mail} </li>
          <li>{this.props.ikametgah} </li>
        </ul>
      </div>
    );
  }
}
export default User;
