import React from "react";
import Card from "./Card";
import Tape from "./Tape";
import FlipCard from "./FlipCard";
import Prizes from "./Prizes";

const Home = () => {
  const words = [
    "REGISTER",
    "FOR",
    "GLOBAL",
    "AI",
    "BUILDATHON",
    "NOW",
    "ON",
    "UNSTOP",
    "REGISTER",
    "FOR",
    "GLOBAL",
    "AI",
    "BUILDATHON",
    "NOW",
    "ON",
    "UNSTOP",
  ];

  const stats = [
    {
      id: 1,
      heading: "15k+",
      content: "Social Media",
    },
    {
      id: 2,
      heading: "50000+",
      content: "Reach",
    },
    {
      id: 3,
      heading: "1000+",
      content: "Mentees",
    },
    {
      id: 4,
      heading: "450+",
      content: "College Reach",
    },
    {
      id: 5,
      heading: "250+",
      content: "Registrations",
    },
    {
      id: 6,
      heading: "7+",
      content: "Countries",
    },
  ];

  const cardData = [
    {
      id: 1,
      heading: "Global AI Buildathon",
      content:
        "<p>The Global AI Buildathon is a flagship event of the Girls Leading Tech Machine Learning Cohort. Bringing together 1000+ mentees from 7+ countries, this hackathon is more than just coding; it’s about using Artificial Intelligence and Machine Learning to drive impact. Each project is designed to address at least one UN Sustainable Development Goal (SDG), ensuring that innovation goes hand-in-hand with global responsibility.</p><br><p>With a diverse and inclusive participation model <b>1–3 members per team, with at least one female member </b>, we are committed to empowering women in technology and building an ecosystem of changemakers.</p>",
    },
    {
      id: 2,
      heading: "Mission",
      content: `<ul class="list-disc pl-5">
      <li >Empower women and underrepresented communities in tech by ensuring their active participation in innovation.</li>
<li>Foster a culture of responsible AI development aligned with UN Sustainable Development Goals.</li>
<li>Promote cross-border collaboration to solve global challenges using cutting-edge technologies.</li>
<li>Conclude our Machine Learning Cohort with an impactful project-based learning experience.</li></ul>`,
    },
    {
      id: 3,
      heading: "Vision",
      content:
        "<p>To create an inclusive global platform where young innovators use AI not just to build technology, but to build a sustainable and equitable future.</p>",
    },
    {
      id: 4,
      heading: "Theme",
      content:
        "<p>AI for Sustainable Future: Featuring United Nations 17 Sustainable Development Goals</p>",
    },
  ];

  const prizesArray = [
    {
      id: 1,
      number: "1",
      image: "winner.svg",
      title: "Winner",
      description: [
        `<ul class="list-disc pl-5"><li>Exclusive Swags</li>
        <li>Certificates of Excellence</li>
        <li>Podcast Opportunity to build your personal brand and tell your story</li>
        <li>Unstop Premium Subscription</li>
        <li>1 Year Canva Premium (worth ₹4,000 per team member)</li>
        <li>Free .xyz Domain</li></ul>`,
      ],
      certificate: true,
    },
    {
      id: 2,
      number: "2",
      image: "firstrunner.svg",
      title: "First Runner Up",
      description: [
        `<ul class="list-disc pl-5"><li>Exclusive Swags</li>
        <li>Certificates of Excellence</li>
        <li>Podcast Opportunity to build your personal brand and tell your story</li>
        <li>1 Year Canva Premium (worth ₹4,000 per team member)</li>
        <li>Free .xyz Domain</li></ul>`,
      ],
      certificate: true,
    },
    {
      id: 3,
      number: "3",
      image: "secondrunner.svg",
      title: "Second Runner Up",
      description: [
        `<ul class="list-disc pl-5"><li>Exclusive Swags</li>
        <li>Certificates of Excellence</li>
        <li>Podcast Opportunity to build your personal brand and tell your story</li>
        <li>1 Year Canva Premium (worth ₹4,000 per team member)</li>
      </ul>`,
      ],
      certificate: true,
    },
    {
      id: 4,
      number: "4",
      title: "All Participants",
      image: "certificate.svg",
      description: ["Certificate of participation"],
      certificate: true,
    },
  ];

  const impact = [
    {
      heading: "Women Empowerment",
      content:
        "By mandating at least one female in every team, we are creating opportunities for women to lead and shine in AI innovation.",
    },
    {
      heading: "AI for Good",
      content:
        "Promoting the responsible and ethical use of AI aligned with global development priorities.",
    },
    {
      heading: "Sustainable Future",
      content:
        "Each participant pledges to sow a seed during the opening ceremony, symbolizing their role in nurturing sustainability.",
    },
    {
      heading: "Global Reach",
      content:
        "1000+ mentees from 7+ countries, collaborating across borders for global solutions.",
    },
    {
      heading: "National Alignment",
      content:
        "Supporting India’s vision of becoming a global AI hub by nurturing young innovators.",
    },
  ];
  return (
    <div>
      <section className="bg-[#ff5757] pb-10 sm:pb-10">
        <div className="relative border-t-[105px] sm:border-t-[100px] border-[#ff5757]">
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
        <img
          src="landingPage.png"
          alt="banner"
          className="w-full h-[50vh] sm:h-[65vh] object-fit"
        />
        <div className="relative sm:-mt-3">
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
        <h2 className="sm:text-2xl text-center text-[#FFF5EE] font-black relative z-10 -mt-15 sm:-mt-20 sm:mb-15">
          8-Hour Hackathon | 23rd August 2025
        </h2>

        <div className="flex sm:flex flex-wrap gap-3 justify-center items-center">
          <div className="flex justify-center items-center mt-10 sm:mt-3">
            <div className="font-extrabold text-base sm:text-2xl md:text-3xl text-gray-700 text-center bg-[#FFF5EE] p-6 rounded-4xl sm:border-r-9 sm:border-b-9 border-gray-500  hover:border-5 hover:border-gray-700 hover:transition-all ease-in-out duration-75 border-r-5 border-b-5">
              <h2 className="relative z-10">
                <a
                  href="https://unstop.com/hackathons/global-ai-buildathon-chandigarh-group-of-colleges-landran-1531869/"
                  target="_blank"
                >
                  Register Now on Unstop
                </a>
              </h2>
            </div>
          </div>

          <div className="flex justify-center items-center sm:mt-3">
            <div className="font-extrabold text-base sm:text-2xl md:text-3xl text-gray-700 text-center bg-[#FFF5EE] p-6 rounded-4xl sm:border-r-9 sm:border-b-9 border-gray-500  hover:border-5 hover:border-gray-700 hover:transition-all ease-in-out duration-75 border-r-5 border-b-5">
              <h2 className="relative z-10">
                <a
                  href="https://chat.whatsapp.com/Dhgx45koEuhBiPEURHPSYG"
                  target="_blank"
                >
                  Join Our Community
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-80 sm:mt-10 mb-5 overflow-hidden">
        <Tape
          textList={words}
          rotation="-rotate-6"
          textDirection="right"
          moveDirection="move-diagonal-right"
        />

        <Tape
          textList={words}
          rotation="rotate-6"
          textDirection="left"
          moveDirection="move-diagonal-left"
        />
      </div>

      <div id="#about" className="relative bg-[#ff5757] sm:mt-15">
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
        <div className="flex justify-center items-center bg-red-400 pt-9 pb-1 w-full">
          <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
            <h2 className="relative z-10">About</h2>
            <span className="absolute inset-0 bg-red-300 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-items-center bg-red-400 p-8">
          {cardData.map((card) => (
            <Card
              key={card.id}
              heading={card.heading}
              content={card.content}
              height="auto"
              width="100%"
              // className={
              //   card.id === 0
              //     ? "col-span-1 row-span-2" // First card: 1 column, spans 2 rows (left side)
              //     : "col-span-2 row-span-1" // Other cards: 2 columns, 1 row each (right side)
              // }
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
      {/* <div className="flex justify-center items-center mt-40 mb-10">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Statistics</h2>
          <span className="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>
      <div className="xl:flex justify-center sm:flex flex-wrap mb-30">
        <Card height={"150px"} width={"150px"} />
        <Card height={"150px"} width={"150px"} />
        <Card height={"150px"} width={"150px"} />
      </div> */}

      <div className="flex justify-center items-center mt-20 mb-7">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Statistics</h2>
          <span className="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-6 justify-items-center p-8 text-center items-center">
        {stats.map((card) => (
          <Card
            key={card.id}
            heading={card.heading}
            content={card.content}
            height="auto"
            width="180px"
            className="text-center sm:h-[120px]"
            // className={
            //   card.id === 0
            //     ? "col-span-1 row-span-2" // First card: 1 column, spans 2 rows (left side)
            //     : "col-span-2 row-span-1" // Other cards: 2 columns, 1 row each (right side)
            // }
          />
        ))}
      </div>
      <div className="relative bg-[#ff5757]">
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
      <div className="flex justify-center items-center bg-red-400 p-8 border-b-17 border-red-400">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Prizes</h2>
          <span className="absolute inset-0 bg-red-300 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center mb-7 bg-red-400 p-8 -mt-7">
        {prizesArray.map((card) => (
          <Prizes
            key={card.id}
            number={card.number}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
      <div className="relative bg-[#ff5757] -mt-7">
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

      <div className="flex justify-center items-center mt-20 mb-7">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Impact Created</h2>
          <span className="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>
      <div className="mb-20">
        {/* Desktop / Tablet (Horizontal Scroll Animation) */}
        <div className="hidden md:block overflow-hidden slide-container mx-10">
          <div className="flex animate-slide space-x-4 text-center">
            {impact.map((rule, index) => (
              <Card
                key={index}
                heading={rule.heading}
                content={rule.content}
                height={"auto"}
                width={"350px"}
              />
            ))}
          </div>
        </div>

        {/* Mobile (Vertical Stack) */}
        <div className="flex flex-col gap-6 md:hidden px-6 text-center">
          {impact.map((rule, index) => (
            <div
              key={index}
              className="transform transition duration-500 ease-in-out hover:scale-105"
            >
              <Card
                heading={rule.heading}
                content={rule.content}
                height={"auto"}
                width={"100%"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
