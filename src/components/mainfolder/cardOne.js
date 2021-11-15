import React from "react";

import TEImg from "../../Assets/Technical-experience-img.jpg";
import HIImg from "../../Assets/High-Roi-img.jpg";
import SGImg from "../../Assets/Satisfaction-Guaranteed-img.jpg";

const cardData = [
  {
    id: 0,
    heading: "Heading",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestiae quas et quia quisquam voluptatum eos placeat similique rem. Porro!",
    btnText: "Button",
    img: { src: TEImg, alt: "" },
  },

  {
    id: 1,
    heading: "Heading",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestiae quas et quia quisquam voluptatum eos placeat similique rem. Porro!",
    btnText: "Button",
    img: { src: HIImg, alt: "" },
  },

  {
    id: 2,
    heading: "Heading",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestiae quas et quia quisquam voluptatum eos placeat similique rem. Porro!",
    btnText: "Button",
    img: { src: SGImg, alt: "" },
  },
];

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: cardData[this.props.index].id,
      heading: cardData[this.props.index].heading,
      para: cardData[this.props.index].para,
      btnText: cardData[this.props.index].btnText,
      img: {
        src: cardData[this.props.index].img.src,
        alt: cardData[this.props.index].img.alt,
      },
    };
  }

  render() {
    return (
      <div className="bg-white z-20 relative">
        <div className="bg-green-100">
          <div className="md:flex md:justify-center md:space-x-8 md:px-14">
            <div className="mt-16 py-4 px-4 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img className="w-64" src={this.state.img.src} alt="" />
                <div className="mt-4 text-green-600 text-center">
                  <h1 className="text-xl font-bold">{this.state.heading}</h1>
                  <p className="mt-4 h-60 text-gray-600">{this.state.para} </p>
                  <button className=" mb-4 btn">{this.state.btnText} </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
