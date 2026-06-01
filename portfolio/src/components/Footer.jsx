import React from "react";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-8 text-center">

      <h3 className="text-white text-xl font-semibold mb-2">
        Raj Kumar Nishad
      </h3>

      <p>MERN Stack Developer</p>

      <div className="flex justify-center gap-6 mt-3">

        <a
          href={personalInfo.github}
          target="_blank"
        >
          GitHub
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
        >
          LinkedIn
        </a>

      </div>

       <p className="mt-3 text-sm">
         © {new Date().getFullYear()} Raj Kumar Nishad.
        All Rights Reserved.
       </p>
    </footer>
  );
};

export default Footer;












// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-slate-900 text-center py-8 text-gray-400">
//       <p>
//         © {new Date().getFullYear()} Raj Kumar Nishad.
//         All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;