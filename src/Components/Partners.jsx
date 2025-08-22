import React from "react";
import PartnerCard from "./PartnerCard";
import Card from "./Card";

const Partners = (props) => {
  const whyPartner = [
    {
      heading: "Global Reach & Diversity",
      content:
        "Connect with 1000+ young innovators from 7+ countries, creating a vibrant international community of changemakers.",
    },
    {
      heading: "Driving Social Impact",
      content:
        "Every project addresses at least one UN Sustainable Development Goal (SDG), ensuring your partnership directly contributes to meaningful global challenges.",
    },
    {
      heading: "Empowering Women in Tech",
      content:
        "With mandatory female participation in every team, your support strengthens inclusivity and helps bridge the gender gap in AI/ML.",
    },
    {
      heading: "Talent Discovery & Networking",
      content:
        "Gain access to a pool of emerging AI/ML talent, future leaders, and innovators eager to collaborate, intern, or work with forward-thinking organizations.",
    },
    {
      heading: "Brand Visibility & Thought Leadership",
      content:
        "Showcase your commitment to innovation, sustainability, and diversity through event branding, speaking opportunities, and global recognition.",
    },
    {
      heading: "Collaborative Ecosystem",
      content:
        "Be part of a growing network of tech leaders, educators, entrepreneurs, and social impact organizations building solutions for a better tomorrow.",
    },
  ];

  const partner = [
    {
      name: "unstop",
      image: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Large.png",
      company: "UNSTOP",
      hyperlink: "https://unstop.com/",
    },
    {
      name: "code 4 govTech",
      image: "c4gt.svg",
      company: "Code 4 GovTech",
      hyperlink: "http://codeforgovtech.in/",
    },
    {
      name: "welzin",
      image: "hiring.jpg",
      company: "WELZIN AI - HIRING PARTNER",
      hyperlink: "https://www.welzin.ai/",
    },
     {
      name: "darzy",
      image: "https://media.licdn.com/dms/image/v2/D560BAQEMo9bn5XDMIg/company-logo_200_200/B56ZdffNAiHUAI-/0/1749653705229/darzy_ai_logo?e=1758758400&v=beta&t=s0sHX4zOAEPei_06dNNYZ1LZtFzNkXVCOYrADUg7qIQ",
      company: "DARZY AI - HIRING PARTNER",
      hyperlink: "https://www.darzy.ai/",
    },
  ];
  return (
    <div>
      <div class="flex justify-center items-center mt-40 mb-10">
        <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 class="relative z-10">Our Partners</h2>

          <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>
      <div className="gap-8 px-4 flex-wrap flex sm:flex justify-center items-center rounded-2xl object-contain">
        {partner.map((partnerItem, index) => (
          <PartnerCard
            key={index}
            name={partnerItem.name}
            image={partnerItem.image}
            company={partnerItem.company}
            hyperlink={partnerItem.hyperlink}
          />
        ))}
      </div>
      {/* <hr className="border-t-5 border-dashed border-red-400" /> */}
      <div id="#about" className="relative bg-[#ff5757] mt-10">
        <svg
          viewBox="0 0 1200 20"
          className="w-full h-5"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,0 C20,20 40,20 60,0 C80,20 100,20 120,0 C140,20 160,20 180,0 C200,20 220,20 240,0 C260,20 280,20 300,0 C320,20 340,20 360,0 C380,20 400,20 420,0 C440,20 460,20 480,0 C500,20 520,20 540,0 C560,20 580,20 600,0 C620,20 640,20 660,0 C680,20 700,20 720,0 C740,20 760,20 780,0 C800,20 820,20 840,0 C860,20 880,20 900,0 C920,20 940,20 960,0 C980,20 1000,20 1020,0 C1040,20 1060,20 1080,0 C1100,20 1120,20 1140,0 C1160,20 1180,20 1200,0 L1200,20 L0,20 Z"
            fill="#f5f5dc"
            className="drop-shadow-sm"
          />
        </svg>
      </div>
      <div className="space-x-2">
        <div className="flex justify-center items-center bg-red-400 pt-9 w-full">
          <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
            <h2 className="relative z-10">Why Partner with US</h2>
            <span className="absolute inset-0 bg-red-300 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 bg-red-400 p-8">
          {whyPartner.map((card) => (
            <Card
              key={card.id}
              heading={card.heading}
              content={card.content}
              height="auto"
              width="100vh"
            />
          ))}
        </div>
      </div>
      <div className="relative bg-[#ff5757] mb-10">
        <svg
          viewBox="0 0 1200 20"
          className="w-full h-5"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,20 C20,0 40,0 60,20 C80,0 100,0 120,20 C140,0 160,0 180,20 C200,0 220,0 240,20 C260,0 280,0 300,20 C320,0 340,0 360,20 C380,0 400,0 420,20 C440,0 460,0 480,20 C500,0 520,0 540,20 C560,0 580,0 600,20 C620,0 640,0 660,20 C680,0 700,0 720,20 C740,0 760,0 780,20 C800,0 820,0 840,20 C860,0 880,0 900,20 C920,0 940,0 960,20 C980,0 1000,0 1020,20 C1040,0 1060,0 1080,20 C1100,0 1120,0 1140,20 C1160,0 1180,0 1200,20 L1200,0 L0,0 Z"
            fill="#f5f5dc"
            className="drop-shadow-sm"
          />
        </svg>
      </div>
      <div class="flex justify-center items-center mt-20 mb-10">
        <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 class="relative z-10">Want to become our Partner?</h2>

          <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>
      <div className="flex justify-center items-center sm:pr-80 sm:pl-80 pl-4 pr-4 flex-wrap">
        <h1 className="text-gray-600 font-bold text-center mb-7">
          Join us in shaping the future of technology and impact. By partnering
          with the Global AI Buildathon, you’re not just supporting a
          hackathon—you’re investing in the next generation of innovators,
          leaders, and changemakers.
        </h1>
        <button className="px-8 py-3 border-2 border-red-400 font-semibold rounded-full bg-white text-red-400 mb-10 hover:bg-red-400 hover:text-gray-700 hover:border-gray-700 transition-colors ease-in-out duration-100">
          Contact us at girlsleadingtech@gmail.com
        </button>
      </div>
    </div>
  );
};

export default Partners;
