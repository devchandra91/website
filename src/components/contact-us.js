const contactUsLabel = "grid text-sm font-semibold space-y-3";
const contactUsInput =
  "bg-gray-100 focus:bg-gray-50 rounded-md w-full shadow-inner px-4 outline-none border-2 border-animation py-2 ";
const handleSubmit = (event) => {
  event.preventDefault();
};

export default function ContactUs() {
  return (
    <div className="bg-white relative z-20 mt-4">
      <h3
        className="bg-green-400 inline-block py-2 px-20
                     text-white text-xl  rounded-tr-md rounded-br-md
                      shadow-md"
      >
        Contact Us
      </h3>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div
              className="grid grid-cols-1 space-y-8 px-10 sm:px-24 py-10 lg:px-56
                                         md:grid-cols-2 md:space-y-0 gap-8"
            >
              <div>
                <label className={contactUsLabel} htmlFor="first-name">
                  First Name
                  <input
                    className={contactUsInput}
                    type="text"
                    name="first-name"
                    id="first-name"
                  />
                </label>
              </div>
              <div>
                <label className={contactUsLabel} htmlFor="last-name">
                  Last Name
                  <input
                    className={contactUsInput}
                    type="text"
                    name="last-name"
                    id="last-name"
                  />
                </label>
              </div>
              <div>
                <label className={contactUsLabel} htmlFor="email">
                  Email
                  <input
                    className={contactUsInput}
                    type="email"
                    name="email"
                    id="email"
                  />
                </label>
              </div>
              <div>
                <label className={contactUsLabel} htmlFor="contact">
                  Phone
                  <input
                    className={contactUsInput}
                    type="tel"
                    name="contact"
                    id="contact"
                  />
                </label>
              </div>
              <div className="md:col-span-2">
                <label className={contactUsLabel} htmlFor="message">
                  How can we help you?
                  <textarea
                    className={contactUsInput}
                    cols="30"
                    rows="3"
                    name="message"
                    id="message"
                  ></textarea>
                </label>
              </div>
              <div className="md:col-span-2">
                <input
                  className="btn grid relative mx-auto"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
