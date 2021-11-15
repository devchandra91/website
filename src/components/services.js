export default function Services() {
  return (
    <div className="bg-white relative z-20">
      <div className="bg-green-200 bg-opacity-50">
        <div className=" grid justify-items-center">
          <h2 className="font-semibold text-5xl text-green-700  grid justify-center py-20 mt-6">
            OUR SERVICES
          </h2>
          <div
            className="py-3 grid  grid-flow-col grid-cols-2 grid-rows-3  
                       justify-items-center text-right md:text-center font-medium 
                       text-gray-700 place-items-center gap-2 mb-20 md:mb-0"
          >
            <div
              className="row-start-1 col-span-2 md:col-start-1 md:row-span-1 
                         md:col-span-2 shadow-lg bg-white p-12 w-full md:w-max
                         rounded-md bg-opacity-90"
            >
              <h3 className="text-4xl mb-4">React JS</h3>
              <div className="text-base">Frontend Development with React</div>
            </div>
            <div
              className="row-start-2 col-span-2 md:col-span-1 
                         md:col-start-1 md:row-span-2 shadow-lg bg-white md:w-auto
                         p-12 w-full rounded-md md:grid md:self-start 
                         md:px-4"
            >
              <h3 className="text-4xl mb-4">CSS</h3>
              <div className="text-base">Styled with TailWind CSS</div>
            </div>
            <div
              className="row-start-3 col-span-2 md:row-start-2 md:col-start-2 md:row-span-2 
                         md:col-span-1 shadow-lg bg-white p-12 w-full md:w-auto
                         rounded-md md:self-start md:grid"
            >
              <h3 className="text-4xl mb-4">Routing</h3>
              <div className="text-base">Routing with React Router</div>
            </div>
          </div>
          <div
            className=" bg-reviews-img bg-cover bg-black filter bg-blend-overlay bg-opacity-30
                         w-screen bg-fixed h-screen grid place-items-center"
          >
            <h3 className="text-5xl text-white">Reviews</h3>
            <div
              className="bg-yellow-400 grid place-items-center 
                            px-16 py-24  mb-40 bg-opacity-90 text-xl font-medium"
            >
              <div>Reviews coming soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
