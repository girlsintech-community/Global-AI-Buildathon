import React from "react";
import WinnerCard from "./WinnerCard";
const Winners = () => {
  const winners = [
    {
      name: "Shalvi Rajpura",
      company: "Grand Winner",
      role: "Ahmedabad",
      image: "shalvi.jpeg",
      linkedinUrl: "http://linkedin.com/in/shalvirajpura",
      position: "winner.svg",
    },
    {
      name: "Prathamesh Yewale",
      company: "First Runner Up",
      role: "Pune",
      image: "prathamesh.png",
      linkedinUrl:
        "https://www.linkedin.com/in/prathameshyewale?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      position: "firstrunner.svg",
    },
    {
      name: "Payal Sahu",
      company: "Second Runner Up",
      role: "Delhi",
      image: "payal.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/payal-sahu1/",
      position: "secondrunner.svg",
    },
  ];

  const seed = [
    {
      name: "Anshika Singh",
      company: "Nature Lover",
      role: "Delhi",
      image: "anshika.jpg",
      linkedinUrl: "https://www.linkedin.com/in/anshika-singh093/",
      position: "plant.png",
    },
  ];
  return (
    <div>
      <div>
        <div class="flex justify-center items-center mt-40 mb-10">
          <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
            <h2 class="relative z-10">Grand winners of our ML Quiz</h2>

            <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-5 pr-8 pl-8 object-cover">
          {winners.map((winners, index) => (
            <WinnerCard
              key={index}
              name={winners.name}
              company={winners.company}
              role={winners.role}
              image={winners.image}
              linkedinUrl={winners.linkedinUrl}
              position={winners.position}
            />
          ))}
        </div>
      </div>
      <hr className="border-t-5 border-dashed border-red-400" />
      <div class="flex justify-center items-center mt-20 mb-10">
        <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 class="relative z-10">"Sow a Seed", An initiative towards sustainable environment</h2>

          <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-5 pr-8 pl-8 object-cover xl:ml-70">
        <div>
          {seed.map((seed, index) => (
            <WinnerCard
              key={index}
              name={seed.name}
              company={seed.company}
              role={seed.role}
              image={seed.image}
              linkedinUrl={seed.linkedinUrl}
              position={seed.position}
            />
          ))}
        </div>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7365241245553606657?collapsed=1"
          className="w-full max-w-2xl h-100 sm:h-100 lg:h-[480px] lg:w-[680px] border-0 rounded-2xl shadow-lg lg:mt-4"
          allowFullScreen
          title="LinkedIn Embedded Post"
        />
      </div>
    </div>
  );
};

export default Winners;
