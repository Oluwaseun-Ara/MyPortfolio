import { motion } from "framer-motion";
import Earth from "./Earth";
import "../css/contact.css";

function Contactpro() {

  return (
    <div className="contact">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="contact_form flex justify-center gap-0 p-2 ss:-mx-4 xs:-mx-3"
      >
        <motion.div
          className="w-full p-5"
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-white  text-4xl text-center">
            Get <span className="text-pry">in </span>Touch
          </p>
          <p className="p-2 text-white text-center">
            Let`s connect and make things happen! Reach out to me for exciting
            opportunities and collaborations.
          </p>
        </motion.div>

        <form
        action="https://formspree.io/f/xgebqnry"
        method="POST"
        id="form"
        autoComplete="given-name"
          className="mt-0 flex flex-col gap-2"
        >
          <label
            className="flex flex-col"
            htmlFor="name"
          > </label>
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="What's your good name?"
              className="bg-sec py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
         
          <label
            className="flex flex-col"
            htmlFor="email"
          > </label>
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="What's your Email ?"
              className="bg-sec py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
         
        
          <label className="flex flex-col"htmlFor="message">
            <span className="text-white font-medium mb-4">Your Message</span> </label>
            <textarea
              rows={7}
              name="message"
              id="message"
              required
              placeholder="What you want to say?"
              className="bg-sec py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
         
        
          <button
            type="submit"
            className="py-3 px-8 rounded-xl  w-fit text-white font-bold shadow-md shadow-tet text-center mx-auto hover:bg-sub hover:shadow-black"
          >
           Send
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="balls mx-auto"
      >
        <Earth />
      </motion.div>
    </div>
  );
}
export default Contactpro;
