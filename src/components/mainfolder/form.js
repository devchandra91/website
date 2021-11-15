import React from "react";
import { TiAttachmentOutline } from "react-icons/ti";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      phone: "",
      email: "",
      message: "",
      file: "",
      attachment: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      target.type === "file"
        ? { [name]: target.files.length }
        : { [name]: value }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="xl:px-36">
        <hr />
        <form
          onSubmit={this.handleSubmit}
          className=" lg:px-72 md:px-56 sm:px-32 px-10 
                 space-y-4 m-4 justify-items-stretch 
               bg-white grid pt-10 pb-28  "
        >
          <h2
            className=" mt-4 mb-5 w-max py-3 px-8  
                      rounded-md border-opacity-50 blink
                     text-green-700 text-xl  font-medium
                    grid justify-center justify-self-center"
          >
            -[ WE'RE HIRING ]-
          </h2>
          <h3
            className="mx-auto mb-4 px-4 text-green-600 pb-2 text-lg font-semibold
         "
          >
            Apply Now
          </h3>
          <label>
            <input
              name="Name"
              type="text"
              checked={this.state.Name}
              onChange={this.handleInputChange}
              className="rounded-full w-full h-8 bg-gray-100 focus:bg-gray-50 shadow-inner
                        px-4 outline-none border-2 border-animation"
              placeholder="Name"
            />
          </label>
          <br />
          <label>
            <input
              name="phone"
              type="tel"
              value={this.state.phone}
              onChange={this.handleInputChange}
              placeholder="Phone"
              className="bg-gray-100 focus:bg-gray-50 rounded-full w-full h-8 
                       shadow-inner px-4 outline-none border-2 border-animation"
            />
          </label>
          <br />
          <label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Email"
              className="bg-gray-100 focus:bg-gray-50 rounded-full w-full h-8 shadow-inner px-4 outline-none border-2 border-animation"
            />
          </label>
          <br />
          <label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              placeholder="Message"
              className="bg-gray-100 focus:bg-gray-50 rounded-md w-full shadow-inner py-2 px-4 outline-none border-2 border-animation"
              rows="5"
            ></textarea>
          </label>

          <div className="flex justify-between">
            <label className="cursor-pointer text-xs">
              <div className="text-green-800 flex  hover:text-yellow-600">
                {" "}
                <i className="p-0.5">
                  <TiAttachmentOutline />
                </i>{" "}
                Attach Resume
              </div>
              <input
                onChange={this.handleInputChange}
                type="file"
                name="attachment"
                multiple
                visited="true"
                className="hidden"
              />
            </label>

            <div className="text-xs">Attachment({this.state.attachment})</div>
          </div>

          <br />
          <input type="submit" value="Submit " className=" p-2 btn " />
        </form>
      </div>
    );
  }
}
