// import React from "react";

// const GithubStats = () => {
//   return (
//     <section className="py-24 bg-slate-950 text-white px-6">
//       <div className="max-w-6xl mx-auto">

//         <h2 className="text-4xl font-bold text-center mb-12">
//           GitHub Stats
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">

//          <img
//   src="https://github-readme-stats.vercel.app/api?username=Rajnishad001&show_icons=true&hide_border=true&theme=transparent"
//   alt="GitHub Stats"
//   className="w-full rounded-xl"
// />

//           <img
//             src="https://github-readme-streak-stats.herokuapp.com/?user=Rajnishad001&theme=tokyonight"
//             alt="github streak"
//             className="w-full rounded-xl"
//           />

//         </div>

//       </div>
//     </section>
//   );
// };

// export default GithubStats;

import React from "react";
import { FaGithub, FaCodeBranch, FaLaptopCode } from "react-icons/fa";

const GithubStats = () => {
  return (
    <section className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          GitHub Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <FaGithub className="text-5xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold">GitHub</h3>
            <p className="text-gray-400 mt-2">
              Active developer building MERN stack projects.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <FaLaptopCode className="text-5xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold">Projects</h3>
            <p className="text-gray-400 mt-2">
              Task Manager App, QuickChat and more.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <FaCodeBranch className="text-5xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold">Learning</h3>
            <p className="text-gray-400 mt-2">
              Continuously improving MERN Stack skills.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubStats;