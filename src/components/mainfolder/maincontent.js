const MainContent = () => {
  return (
    <div className=" bg-white relative mx-4 z-0 my-4 pt-6 pb-14">
      <div className=" bg-gray-100 pt-4 pb-8 shadow-inner rounded-md max-w-2xl mx-auto">
        <div
          className="relative max-w-xl bg-gradient-to-b from-green-400 to-Orangy-200 h-80
                  bg-white my-8 mx-6 md:mx-auto shadow-2xl 
                  rounded-3xl grid self-center transform -rotate-6"
        >
          <div
            className=" max-w-3xl shadow-xl bg-gradient-to-br from-blue-100 to to-blue-50 
                           rounded-3xl h-80 py-8 bg-opacity-90 grid self-center transform  rotate-6 
                            overflow-auto "
          >
            <div className=" h-56 py-14 grid self-start">
              <div className="  text-center">
                <h2 className=" text-xl font-black text-gray-600">
                  Frontend Development
                </h2>
                <p
                  className="  mt-3 bg-blue-200 shadow-md py-2 px-4 rounded-lg 
                            w-max flex mx-auto  transform text-gray-500
                             -rotate-3 text-center"
                >
                  With React and Tailwind CSS
                </p>
                <button className=" mt-7 py-3 px-6 btn  ">button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
