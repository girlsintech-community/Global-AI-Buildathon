import React from "react";

const Projects = () => {
  return (
    <div className="mt-50 mb-10">
      <div className="flex justify-center items-center mt-40 mb-10">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Projects Made by our Hackers</h2>
          <span className="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      <div className="relative bg-red-400">
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
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/apptQ7yqRDEsbZTlR/shrksAlclHED5Duc6?viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
      ></iframe>
      <div className="relative sm:-mt-5 bg-red-400">
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
    </div>
  );
};

export default Projects;
