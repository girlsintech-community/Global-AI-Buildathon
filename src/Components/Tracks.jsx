import React from "react";
import Card from "./Card";
import FlipCard from "./FlipCard";

const Tracks = () => {
  const displayData = [
    {
      id: 1,
      number: 1,
      title: "No Poverty",
      image: "./nopoverty.svg",
      description:
        "End poverty in all its forms everywhere. This goal aims to eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 2,
      number: 2,
      title: "Zero Hunger",
      image: "./zerohunger.svg",
      description:
        "End hunger, achieve food security and improved nutrition and promote sustainable agriculture. This goal seeks to ensure access to safe, nutritious food for all.",
      targetYear: "2030",
      priority: "Critical",
    },
    {
      id: 3,
      number: 3,
      title: "Good Health",
      image: "./goodhealth.svg",
      description:
        "Ensure healthy lives and promote well-being for all at all ages. This includes reducing maternal mortality and ending epidemics of major diseases.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 4,
      number: 4,
      title: "Quality Education",
      image: "./education.svg",
      description:
        "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. Education is the foundation for improving people's lives.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 5,
      number: 5,
      title: "Gender Equality",
      image: "./genderequality.svg",
      description:
        "Achieve gender equality and empower all women and girls. This goal aims to end all forms of discrimination against women and girls everywhere.",
      targetYear: "2030",
      priority: "Critical",
    },
    {
      id: 6,
      number: 6,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 7,
      number: 7,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 8,
      number: 8,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 9,
      number: 9,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 10,
      number: 10,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 11,
      number: 11,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 12,
      number: 12,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 13,
      number: 13,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 14,
      number: 14,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 15,
      number: 15,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 16,
      number: 16,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
    {
      id: 17,
      number: 17,
      title: "Clean Water",
      image: "./cleanwater.svg",
      description:
        "Ensure availability and sustainable management of water and sanitation for all. Access to safe water, sanitation and hygiene is the most basic human need.",
      targetYear: "2030",
      priority: "High Priority",
    },
  ];
  
  const customContent = [
    {
      heading: "Theme for the Hackathon: AI for a Sustainable Future",
      content: `
        <ul class="list-disc pl-5">
          <b>By aligning your project to an SDG, you ensure your work is:</b>
          <li>Impact-driven – Solving real, urgent problems.</li>
          <li>Globally relevant – Benefiting communities worldwide.</li>
          <li>Sustainable – Creating long-term positive change.</li>
        </ul>
      `,
    },
  ];

  return (
    <div className="px-4">
      {/* Section Heading */}
      <div className="flex justify-center items-center mt-40 mb-10">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Buildathon's Theme</h2>
          <span className="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      {/* Content + Image */}
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 lg:ml-30">
        {customContent.map((item, index) => (
          <Card
            key={index}
            heading={item.heading}
            content={item.content}
            height="auto"
            width="70%"
          />
        ))}
        <img
          src="/sdg.svg"
          alt="sdg-pic"
          className="mb-8 w-90 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-transform duration-500 ease-in-out hover:rotate-360"
        />
      </div>

      <hr className="border-t-5 border-dashed border-red-400" />
      <div class="flex justify-center items-center mt-20 mb-10">
        <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 class="relative z-10">Why this Theme?</h2>

          <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        {displayData.map((card) => (
          <FlipCard
            key={card.id}
            number={card.number}
            title={card.title}
            image={card.image}
            description={card.description}
            targetYear={card.targetYear}
            priority={card.priority}
          />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
