//class based comp is normal js class

import { ReactNode } from "react";
import React from "react";
import { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "parent class constructor is called ");

    this.state = {
      count: 0,
      count1: 2,
      count2: 3,
      count4: 5,

      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount(): void {
    console.log(this.props.name + "componentDid Mount for parent");

    const data = await fetch("   https://api.github.com/user");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    //instead of return here is a render function , here it is a class which has a render method which returns a jsx

    //desructure the name location kahin dikhane se phle destructure
    const { name, location } = this.state.userInfo;

    console.log(this.props.name + "parent class render method is called ");

    return (
      <div className="user-card">
        <h1>Class Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count: this.state.count2 + 1,
            });
          }}>
          Increase Count
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}>
          Decrease Count
        </button>

        <h2>Name : {this.props.name} </h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: akhil.sharma1@stryker.com</h4>
      </div>
    );
  }
}

export default UserClass;
