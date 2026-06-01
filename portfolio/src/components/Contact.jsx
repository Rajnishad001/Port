import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ugb2l6t",
        "template_ftc9hil",
        form.current,
        "cH0R_p1U-M1XMebJm"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to Send Message");
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>
<div className="text-center mb-10">
  <h2 className="text-4xl font-bold">
    Let's Work Together
  </h2>

  <p className="text-gray-400 mt-3">
    Have a project in mind? Feel free to contact me.
  </p>
</div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700"
          />

          <button
            type="submit"
            className="bg-cyan-500 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
          >
            Send Message
          </button>

        </form>

      </motion.div>
    </section>
  );
};

export default Contact;