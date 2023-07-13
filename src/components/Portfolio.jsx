import React from "react";
import sertifikat from "../assets/portfolio/Ahmad_Rizki20230606-70-1urja2m.jpg";
import pkl from "../assets/portfolio/Screenshot_2.png";
import freecodecamp from "../assets/portfolio/154709630-960ed5c3-c4d1-41d5-9e1b-222fed5edb2d.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sertifikat,
    },
    {
      id: 2,
      src: freecodecamp,
    },
    {
      id: 3,
      src: pkl,
    },
    

    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Sertifikat
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
