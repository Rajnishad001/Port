import React from "react";

const stats = [
  {
    number: "5+",
    title: "Projects",
  },
  {
    number: "MERN",
    title: "Developer",
  },
  {
    number: "100%",
    title: "Dedication",
  },
  {
    number: "Open",
    title: "To Work",
  },
];

const Stats = () => {
  return (
    <section className="bg-slate-950 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition"
          >
            <h3 className="text-cyan-400 text-3xl font-bold">
              {item.number}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;