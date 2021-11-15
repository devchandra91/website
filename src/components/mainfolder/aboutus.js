import React from "react";
import CardOne from "./cardOne";

const Heading = `-[ About Us ]-`;

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h1 className="font-bold text-gray-600 justify-center flex text-xl mt-6 mb-10 ">
            {Heading}
          </h1>
        </div>
        <hr />
        <div className="bg-green-100 pt-2 pb-20 md:flex md:justify-evenly md:flex-wrap ">
          <div>
            <CardOne index="0" />
          </div>
          <div>
            <CardOne index="1" />
          </div>
          <div>
            <CardOne index="2" />
          </div>
        </div>
      </div>
    );
  }
}
