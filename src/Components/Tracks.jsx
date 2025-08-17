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
      "Over 700 million people still live on less than $2 a day. Poverty steals dreams before they even begin.",
  },
  {
    id: 2,
    number: 2,
    title: "Zero Hunger",
    image: "./zerohunger.svg",
    description:
      "1 in 9 people go to bed hungry every night. No one should have to choose between food and survival.",
  },
  {
    id: 3,
    number: 3,
    title: "Good Health and Well-being",
    image: "./goodhealth.svg",
    description:
      "Every 2 seconds, someone under 70 dies from a non-communicable disease. Health is not a privilege, it’s a right.",
  },
  {
    id: 4,
    number: 4,
    title: "Quality Education",
    image: "./education.svg",
    description:
      "263 million children and youth are out of school. Without education, the future remains locked.",
  },
  {
    id: 5,
    number: 5,
    title: "Gender Equality",
    image: "./genderequality.svg",
    description:
      "Women earn 20% less than men globally. Equality cannot wait another generation.",
  },
  {
    id: 6,
    number: 6,
    title: "Clean Water and Sanitation",
    image: "./cleanwater.svg",
    description:
      "1 in 3 people lack safe drinking water. Water should give life, not take it away.",
  },
  {
    id: 7,
    number: 7,
    title: "Affordable and Clean Energy",
    image: "./affordable.svg",
    description:
      "770 million people still live without electricity. Energy is the spark of opportunity.",
  },
  {
    id: 8,
    number: 8,
    title: "Decent Work and Economic Growth",
    image: "./decentwork.svg",
    description:
      "Billions of workers face insecurity and low wages. Growth means nothing if people are left behind.",
  },
  {
    id: 9,
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    image: "./industry.svg",
    description:
      "Over 1 billion people lack access to basic infrastructure. Innovation should connect, not divide.",
  },
  {
    id: 10,
    number: 10,
    title: "Reduced Inequalities",
    image: "./reduced.svg",
    description:
      "The richest 10% own more than 75% of the world’s wealth. Inequality is humanity’s greatest wound.",
  },
  {
    id: 11,
    number: 11,
    title: "Sustainable Cities and Communities",
    image: "./sustainable.svg",
    description:
      "By 2050, 7 in 10 people will live in cities. Without planning, they will become prisons of pollution.",
  },
  {
    id: 12,
    number: 12,
    title: "Responsible Consumption and Production",
    image: "./responsible.svg",
    description:
      "If everyone consumed like the average person, we’d need 3 Earths. Our choices today shape tomorrow’s survival.",
  },
  {
    id: 13,
    number: 13,
    title: "Climate Action",
    image: "./climate.svg",
    description:
      "The last 7 years have been the hottest in history. Our planet is crying for action now.",
  },
  {
    id: 14,
    number: 14,
    title: "Life Below Water",
    image: "./lifewater.svg",
    description:
      "8 million tonnes of plastic enter our oceans each year. By 2050, fish may be outnumbered by plastic.",
  },
  {
    id: 15,
    number: 15,
    title: "Life on Land",
    image: "./lifeland.svg",
    description:
      "Every year, we lose 10 million hectares of forest. When forests die, humanity suffocates.",
  },
  {
    id: 16,
    number: 16,
    title: "Peace, Justice and Strong Institutions",
    image: "./peace.svg",
    description:
      "Conflict has forced 110 million people from their homes. Without peace, no progress is possible.",
  },
  {
    id: 17,
    number: 17,
    title: "Partnerships for the Goals",
    image: "./partnership.svg",
    description:
      "No goal can be achieved alone. Together is the only way forward.",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center mb-7">
        {displayData.map((card) => (
          <FlipCard
            key={card.id}
            number={card.number}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
