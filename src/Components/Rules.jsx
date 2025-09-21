import React from "react";
import Card from "./Card";
import Testimonials from "./Testimonials";
const Rules = () => {
  const rulesData = [
    {
      heading: "Team Formation",
      content: `<ul class="list-disc pl-5">
        <li>Each team must consist of a maximum of 3 members and a minimum 1 member<b>(inclusion of atleast 1 female member is mandatory)</b></li>
        <li>All participants must register individually and join/create a team through Unstop before the deadline.</li>
      </ul>`,
    },
    {
      heading: "Eligibility",
      content: `<b>Only students</b> currently enrolled in an accredited school, college, or university are eligible to participate in this hackathon. Team members can be any course and university (no mandate on same college/institution team )`,
    },
    {
      heading: "Hackathon Duration",
      content: `The hackathon will run for 8 continuous hours on <b>23rd August 2025</b>.
      The event will begin and end at the scheduled time. Late submissions will not be accepted.`,
    },
    {
      heading: "Theme and Project Scope",
      content: `<ul class="list-disc pl-5">
        <li>Projects must focus on solving real-world problems using AI/ML technologies.</li>
        <li>The challenge <b>themes should incorporate 17 UN SDG's Goals.</b></li>
        <li>Teams must build projects from scratch during the hackathon period, no pre-built code allowed, except public libraries or APIs.</li>
      </ul>`,
    },
    {
      heading: "Tools and Technologies",
      content: `<ul class="list-disc pl-5">
        <li>Participants may use any programming languages, frameworks, or AI/ML tools of their choice.</li>
        <li>Use of no-code or low-code AI platforms is permitted.</li>
        <li>Open-source models and datasets are allowed, but must be credited appropriately.</li>
      </ul>`,
    },
    {
      heading: "Submission Requirements",
      content: `<b>Each team must submit:</b>
      <ul class="list-disc pl-5">
        <li>A GitHub or public repository link with a detailed ReadMe File.</li>
        <li>A brief write-up (max 500 words) explaining the problem, solution, tech stack, and model details.</li>
        <li>A demo video (max 3 minutes) explaining the working of the project.</li>
      </ul>`,
    },
  ];

  const judgetestimonials = [
    {
      content: `What a lovely initiative! It was a pleasure to be a special guest for the opening ceremony and share my insights, and glad to see that the theme was the SDGs. <br> <br> To all the young innovators who took part, have an intersectional lens, question, focus on impact and the cause, and build for a sustainable future FOR ALL! All the best :) <br> <br>`,
      photo: "palakh.jpeg",
      heading: "Palakh Khanna, Speaker of our Event",
      linkedinUrl: "https://www.linkedin.com/in/palakh-khanna/",
    },
  ];
  const testimonials = [
    {
      content:
        `The Buildathon gave me the perfect blend of innovation and collaboration. I explored new AI tools, enhanced my problem-solving skills, and gained valuable exposure to real-world challenges. From code to creativity, the Global AI Buildathon pushed me to think bigger, build bolder, and dream limitless with AI.
        <br> <br>`,
      photo: "ruchika.jpg",
      heading: "Ruchika Kengal",
      linkedinUrl: "https://www.linkedin.com/in/selvasundar-rajan-788a0330a/",
    },
    {
      content:
        "Participating in the hackathon was an incredible learning experience. I got to build my project from scratch, explore AI tools like Google Gemini, and solve real-world problems creatively. Collaborating with teammates under time pressure improved my problem-solving and project management skills. It was challenging, fun, and highly rewarding!",
      photo: "rutika.jpeg",
      heading: "Rutika",
      linkedinUrl: "https://www.linkedin.com/in/rutika-kengal-b3b0a22b7/",
    },
    {
      content:
        "The Buildathon Overall, it was a wonderful experience! The theme was truly engaging, and I really appreciated how the organizers added small activities in between the hackathon—it kept the energy high and made the event more interactive. The video presentation segment was also a great learning opportunity. Along with coding, me and my teammate gained valuable insights beyond just technical skills gave me the perfect blend of innovation and collaboration.",
      photo: "shyama.png",
      heading: "The Visionaries",
      linkedinUrl: "https://www.linkedin.com/in/shyama-tripathi-227611250/",
    },
  ];

  return (
    <div>
      {/* Title */}
      <div className="flex justify-center items-center mt-40 mb-10">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Submission Rules</h2>
          <span className="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      {/* Cards */}
      <div className="mb-20">
        {/* Desktop / Tablet (Horizontal Scroll Animation) */}
        <div className="hidden md:block overflow-hidden slide-container mx-10">
          <div className="flex animate-slide space-x-4">
            {rulesData.map((rule, index) => (
              <Card
                key={index}
                heading={rule.heading}
                content={rule.content}
                height={"390px"}
                width={"350px"}
              />
            ))}
          </div>
        </div>

        {/* Mobile (Vertical Stack) */}
        <div className="flex flex-col gap-6 md:hidden px-6">
          {rulesData.map((rule, index) => (
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

       <hr className="border-t-5 border-dashed border-red-400" />

      <div className="flex justify-center items-center mt-20 mb-10">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Testimonials</h2>
          <span className="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      <div className="mb-20">
        <div className="hidden md:block mx-15">
          <div className="flex justify-center space-x-4">
            {judgetestimonials.map((rule, index) => (
              <Testimonials
                key={index}
                heading={rule.heading}
                content={rule.content}
                photo={rule.photo}
                height={"auto"}
                width={"1250px"}
                linkedinUrl={rule.linkedinUrl}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          {/* Desktop / Tablet (Horizontal Scroll Animation) */}
          <div className="hidden md:block">
            <div className="flex xl:ml-28 xl:mr-28">
              {testimonials.map((rule, index) => (
                <Testimonials
                  key={index}
                  heading={rule.heading}
                  content={rule.content}
                  photo={rule.photo}
                  height={"auto"}
                  width={"auto"}
                  linkedinUrl={rule.linkedinUrl}
                />
              ))}
            </div>
          </div>

          {/* Mobile (Vertical Stack) */}
          <div className="flex flex-col gap-6 md:hidden px-6">
            {testimonials.map((rule, index) => (
              <div
                key={index}
                className="transform transition duration-500 ease-in-out hover:scale-105"
              >
                <Testimonials
                  key={index}
                  heading={rule.heading}
                  content={rule.content}
                  photo={rule.photo}
                  height={"390px"}
                  width={"auto"}
                  linkedinUrl={rule.linkedinUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
