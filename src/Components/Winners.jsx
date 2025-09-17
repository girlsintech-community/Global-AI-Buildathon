import React from "react";
import WinnerCard from "./WinnerCard";
import Card from "./Card";
const Winners = () => {
  const Grandwinners = [
    {
      name: "Ayush Kumar",
      company: "Team Chromies",
      role: "Odisha",
      image:
        "ayush.jpg",
      linkedinUrl: "https://www.linkedin.com/in/ayush-kumar-607444242",
      position: "winner.svg",
    },
    {
      name: "Swetanjana Maity",
      company: "Team Chromies",
      role: "Odisha",
      image:
        "swetajana.jpg",
      linkedinUrl: "https://www.linkedin.com/in/swetanjana-maity-a85bba202/",
      position: "winner.svg",
    },
    {
      name: "Subham Kumar Sahoo",
      company: "Team Chromies",
      role: "Odisha",
      image:
        "shubham.jpg",
      linkedinUrl: "https://www.linkedin.com/in/subham-kumar-sahoo-296391300/",
      position: "winner.svg",
    },
  ];
  const secondwinners = [
    {
      name: "Varsha Dewangan",
      company: "varshadewangan454",
      role: "Chattisgarh",
      image:
        "varsha.jpg",
      linkedinUrl: "https://www.linkedin.com/in/varsha-dewangan-197983256/",
      position: "firstrunner.svg",
    },
  ];
  const thirdwinners = [
    {
      name: "Puli Akhil Kumar",
      company: "Team Hackronauts",
      role: "Hyderabad",
      image:
        "puli.jpg",
      linkedinUrl: "https://www.linkedin.com/in/puli-akhil-kumar-3a994432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      position: "secondrunner.svg",
    },
    {
      name: "Laxmi Harshitha",
      company: "Team Hackronauts",
      role: "Hyderabad",
      image:
        "laxmi.jpg",
      linkedinUrl: "https://www.linkedin.com/in/laxmi-harshitha-thatikonda-981179329/",
      position: "secondrunner.svg",
    },
   
  ];
  const winners = [
    {
      name: "Shalvi Rajpura",
      company: "Grand Winner",
      role: "Ahmedabad",
      image: "shalvi.jpeg",
      linkedinUrl: "http://linkedin.com/in/shalvirajpura",
      position: "secondrunner.svg",
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
            <h2 class="relative z-10">Grand winners of AI Buildathon</h2>

            <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-5 pr-8 pl-8 object-contain">
            {Grandwinners.map((winners, index) => (
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
        <div>
          <Card
            heading="Project Details - Genova-AI"
            content="Evo2 by Team Chromies is an AI-powered pathogenicity predictor that revolutionizes genetic variant interpretation. Traditional methods are slow, costly, and inconsistent—Evo2 delivers results in under 30 seconds with over 90% accuracy. With a user-friendly dashboard, genome search, real-time comparisons, and detailed confidence reports, it empowers clinicians to make faster, standardized, and more reliable decisions. By reducing costs and improving precision medicine, Evo2 advances global healthcare and supports the UN’s health-focused SDGs."
            height="auto"
            width="1500px"
          />
        </div>
        <br></br>
        <hr className="border-t-5 border-dashed border-red-400" />

        <div className="xl:pl-135 xl:pr-135">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 justify-center align-middle m-5 pr-8 pl-8 object-contain">
            {secondwinners.map((winners, index) => (
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
        <div>
          <Card
            heading="Project Details"
            content="HealthAI, presented by Varsha Dewangan at the Global AI Buildathon, is an AI-powered healthcare platform designed to make medical guidance accessible, affordable, and scalable for underserved populations. Leveraging Google Gemini AI, NLP, and real-time updates, it delivers instant, personalized health insights with 95% accuracy and subsecond response times. With features like symptom analysis, tailored recommendations, and a 24/7 health library, HealthAI aligns with UN SDG 3 and envisions integrating wearables and predictive insights to transform global healthcare access."
            height="auto"
            width="1500px"
          />
        </div>
        <br></br>
        <hr className="border-t-5 border-dashed border-red-400" />

        <div className="xl:pl-60 xl:pr-60">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 m-5 pr-8 pl-8 object-contain">
            {thirdwinners.map((winners, index) => (
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
        <div>
          <Card
            heading="Project Details - AI ECO-STORYTELLER"
            content="Echo Storyteller by Team Hackronauts is an innovative app that transforms everyday actions into personalized sustainability stories. Instead of just showing carbon footprint numbers, it narrates engaging stories of users’ choices, making climate action relatable and fun. With features like insights, eco-friendly suggestions, progress tracking, “what-if” scenarios, and guided green paths, it gamifies sustainable living. Built on React, Django, NLP, and Google TTS, it aligns with UN SDGs and inspires individuals to adopt lasting eco-friendly habits."
            height="auto"
            width="1500px"
          />
        </div>
        <br></br>
        <hr className="border-t-5 border-dashed border-red-400" />

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
          <div class="font-extrabold text-base sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
            <h2 class="relative z-10">
              "Sow a Seed", An initiative towards sustainable environment
            </h2>

            <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-5 pr-8 pl-8 object-cover xl:ml-55">
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
    </div>
  );
};

export default Winners;
