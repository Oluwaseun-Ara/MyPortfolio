import "../scss/footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section
      className="footer pt-30 pb-20 bg-sub"
      id="footer"
    >
      <motion.div
        className="w-full p-4 pb-20"
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
          Speed <span className="text-tet">Dial </span>
        </p>
        <p className="p-3 text-white text-center">
          I`m Just One Click Away From You
        </p>
      </motion.div>

      <ul>
        <li>
          <a
            href="https://www.facebook.com/OOluwaseunAra1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-facebook"
              aria-hidden="true"
            ></i>
            <span> - Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:sosunrayi.t@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-google"
              aria-hidden="true"
            ></i>
            <span> - Gmail</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/oluwaseunAra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-linkedin"
              aria-hidden="true"
            ></i>
            <span> - Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/message/4MD3MKJMFRQGB1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-whatsapp"
              aria-hidden="true"
            ></i>
            <span> - Whatsapp</span>
          </a>
        </li>
      </ul>
      <div className="flex flex-col mt-36 pt-4 text-center px-4 pb-10">
        <h3 className="text-white text-3xl pb-4">Oluwaseun Ara</h3>
        <p className="text-white text-1xl">&copy; All Rights Reserved </p>
      </div>
    </section>
  );
};
export default Footer;
