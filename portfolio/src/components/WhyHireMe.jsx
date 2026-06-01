const WhyHireMe = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Hire Me?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-cyan-400 text-xl mb-3">
              MERN Stack
            </h3>

            <p>
              Strong understanding of React, Node.js,
              Express.js and MongoDB.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-cyan-400 text-xl mb-3">
              Responsive UI
            </h3>

            <p>
              Building modern and mobile-friendly interfaces.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-cyan-400 text-xl mb-3">
              Problem Solver
            </h3>

            <p>
              Passionate about solving real-world problems through code.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyHireMe;