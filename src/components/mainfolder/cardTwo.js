import React from "react";
import testerImg from "../../Assets/card-two-img.jpg";

const cardData = [
  {
    id: 0,
    heading: "Heading",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestiae quas et quia quisquam voluptatum eos placeat similique rem. Porro!",
    img: testerImg,
  },

  {
    id: 1,
    heading: "Heading",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestiae quas et quia quisquam voluptatum eos placeat similique rem. Porro!",
    img: testerImg,
  },

  {
    id: 2,
    heading: "Heading",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestiae quas et quia quisquam voluptatum eos placeat similique rem. Porro!",
    img: testerImg,
  },
];

export default class CardTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: cardData[this.props.index].id,
      heading: cardData[this.props.index].heading,
      para: cardData[this.props.index].para,
      img: cardData[this.props.index].img,
    };
  }

  render() {
    return (
      <div className="">
        <div className="grid place-items-center bg-white antialiased text-gray-900">
          <div className="w-96">
            <img
              src={this.state.img}
              alt=""
              className=" object-center rounded-lg shadow-md"
            />
            <div className="relative px-4 -mt-24">
              <div className="h-44 bg-gradient-to-b from-green-500 to-green-200 p-8 rounded-lg shadow-lg ">
                <div className="flex items-baseline"></div>
                <h3 className="mt-1 text-xl font-semibold uppercase leading-tight truncate text-center">
                  {this.state.heading}
                </h3>
                <div className="mt-1">
                  <span className="text-gray-600 text-base text-center">
                    <p>{this.state.para} </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
