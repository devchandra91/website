import React from "react";
import CardTwo from "./cardTwo";

export default class AboutYou extends React.Component {
  render() {
    return (
      <div className="flex justify-around flex-wrap mb-20 mt-6  ">
        <div className="mb-24">
          <CardTwo index="0" />
        </div>
        <div className="mb-24">
          <CardTwo index="1" />
        </div>
        <div>
          <CardTwo index="2" />
        </div>
      </div>
    );
  }
}
