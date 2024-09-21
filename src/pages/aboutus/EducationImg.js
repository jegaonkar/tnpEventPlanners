import React, { Component } from "react";

export default class EducationImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <img
          style={{ height: "80vh", width: "100vw" }}
          src="https://i.pinimg.com/originals/cc/fd/89/ccfd89eb3d8ba44a7da3ee510d595beb.jpg"
        ></img>
      </>
    );
  }
}
