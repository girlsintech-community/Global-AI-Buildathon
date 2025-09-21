import React from "react";
import { Linkedin } from "lucide-react";

const Card = ({ heading, content, height, width, photo, linkedinUrl}) => {
  return (
    <div className="flex justify-center align-middle">
      <div
        style={{ height, width }}
        className="h-80 w-80 sm:w-96 md:w-[300px] lg:w-[350px] xl:w-[400px]
                   sm:h-96 md:h-[300px] lg:h-[350px] xl:h-[400px]
                   bg-white border-2 border-red-300 rounded-2xl shadow-lg 
                   m-4 sm:m-6 md:m-8 lg:m-9 
                   p-4 sm:p-5 md:p-6 lg:p-7 hover:bg-gray-300 transition-all duration-300 ease-in-out 
                   hover:border-4 hover:border-gray-400 hover:shadow-2xl hover:-translate-y-3 hover:scale-105"
      >
        {/* Render HTML directly */}
        <div
          className="text-sm sm:text-base md:text-lg mb-3"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="flex items-center justify-between">
          <img src={photo} className="rounded-full h-12 w-12 object-cover"></img>

          <h2 className="font-extrabold text-sm text-red-400 p-2">{heading}</h2>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 ml-230 p-2 rounded-full 
                       bg-red-500 group-hover:bg-gray-600 text-white
                       transition-all duration-300 hover:scale-110
                       shadow-lg hover:shadow-gray-500/25"
            aria-label={`Visit ${name}'s LinkedIn profile`}
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
