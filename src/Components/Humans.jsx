import React from "react";
import MentorCard from "./MentorCard";

const Human = [
  {
    name: "Aditi Chaudhary",
    company: "Cohort Lead",
    role: "Delhi",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQH2j2wwOz56Bw/profile-displayphoto-shrink_400_400/B4DZRPD6gXHcAg-/0/1736493222475?e=1758153600&v=beta&t=mueU4uEzY-6wGZEXm_H2DlzoyDXJ9lgFH8-UaGFPtNc",
    linkedinUrl: "https://www.linkedin.com/in/aditi-chaudhary-aa7778329/",
  },
  {
    name: "Vijay Laxmi",
    company: "Community lead",
    role: "Delhi",
    image: "./vijaylaxmi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/laxmi-vijay/",
  },
  {
    name: "Vanshika Reja",
    company: "Evaluation lead",
    role: "Senior Engineer",
    image: "/vanshika.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vanshika-reja-50400b2a1/",
  },
  {
    name: "Divya Pal",
    company: "Evaluation Lead",
    role: "Uttar Pradesh",
    image: "./divya.jpg",
    linkedinUrl: "https://www.linkedin.com/in/divya-pal04/",
  },
  {
    name: "Kavyal Vegad",
    company: "Content Lead",
    role: "Mumbai",
    image: "/kavyal.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kavyal-vegad-923520301/",
  },
  {
    name: "Simran Praveen",
    company: "Content Lead",
    role: "Delhi",
    image: "/simran.jpg",
    linkedinUrl: "https://www.linkedin.com/in/simran-parween-9529b6277/",
  },
   {
    name: "Ananya Agarwal", 
    company: "Design Lead",
    role: "Delhi",
    image: "./ananya.jpg",
    linkedinUrl: "hthttps://www.linkedin.com/in/ananya-agarwal-861317290/",
  },
  {
    name: "Mahak",
    company: "Tech Lead",
    role: "Delhi",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGd9chiFLWqbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723394154089?e=1758153600&v=beta&t=wyvzCUGrPECK2wmo9Go8TOvbMK4tUo6Tl9MJ-oQcxTw",
    linkedinUrl: "https://www.linkedin.com/in/documentdiarieswithmahak/",
  },
  {
    name: "Manik",
    company: "Outreach Lead",
    role: "Chandigarh",
    image: "./manik.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mrmanik/",
  },
];

const mentors = [
  {
    name: "Geeta Kakrani",
    company: "Google",
    role: "Google Developer Expert",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQHxxTyHEHK7-g/feedshare-shrink_2048_1536/B4DZcLrmRoIEAo-/0/1748247668704?e=1758153600&v=beta&t=o4EbxCOKBudyVUCC8vB3EYhHIBxe1ei-eOv1QxzlTPU",
    linkedinUrl: "https://www.linkedin.com/in/geetakakrani/",
  },
  {
    name: "Ekta Kumar",
    company: "Govt. of India",
    role: "Social Defence Fellow",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHArwaathKRLg/feedshare-shrink_2048_1536/B56ZawC7HBHgAo-/0/1746710279538?e=1758153600&v=beta&t=8joH8QfzOpWlw2I7Dfq4ReYyBn6sLzo6Xin8f4cJQXQ",
    linkedinUrl: "https://www.linkedin.com/in/ekta-kumar-esg/",
  },
  {
    name: "Shreya Mathur",
    company: "Mobisec <br>Technologies",
    role: "SWE Intern",
    image: "./shreya.png",
    linkedinUrl: "https://www.linkedin.com/in/shreya-mathur-0092b6257/",
  },
];

const Humans = () => {
  return (
    <div>
      <div>
        <div class="flex justify-center items-center mt-40 mb-10">
          <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
            <h2 class="relative z-10">Mentors & Judges</h2>

            <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-5 xl:ml-55 xl:mr-55 mb-9 object-fit">
          {mentors.map((mentor, index) => (
            <MentorCard
              key={index}
              name={mentor.name}
              company={mentor.company}
              role={mentor.role}
              image={mentor.image}
              linkedinUrl={mentor.linkedinUrl}
            />
          ))}
        </div>
      </div>
      <hr className="border-t-5 border-dashed border-red-400" />
      <div class="flex justify-center items-center mt-20 mb-10">
        <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 class="relative z-10">Humans Behind It</h2>

          <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-5 xl:ml-55 xl:mr-55">
        {Human.map((Human, index) => (
          <MentorCard
            key={index}
            name={Human.name}
            company={Human.company}
            role={Human.role}
            image={Human.image}
            linkedinUrl={Human.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Humans;
