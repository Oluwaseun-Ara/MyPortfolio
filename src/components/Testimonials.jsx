import "../css/Testimonials.css";
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials pt-5"
    >
      <h2 className="text-center text-white pt-20 lg:pt-44 mlg:pt-20 pb-1">A little About What</h2>
      <h1 className="text-center pb-10">
        <span className="gradient-text letter .span text-3xl">P</span>
        <span className="gradient-text letter .span text-3xl">e</span>
        <span className="gradient-text letter .span text-3xl">o</span>
        <span className="gradient-text letter .span text-3xl">p</span>
        <span className="gradient-text letter .span text-3xl">l</span>
        <span className="gradient-text letter .span text-3xl">e</span>
        &nbsp;&nbsp; &nbsp;
        <span className="gradient-text letter .span text-3xl">s</span>
        <span className="gradient-text letter .span text-3xl">a</span>
        <span className="gradient-text letter .span text-3xl">y</span>
      </h1>
      <div className="flex justify-center flex-wrap gap-4">
        <section className="snip1157">
          <blockquote>
          Working with you has been an absolute pleasure, and I am truly grateful for the opportunity to serve you. Your trust in our abilities and your clear communication have been instrumental in achieving success throughout our partnership.
            <div className="arrow"></div>
          </blockquote>
          <img
            src="/images/test1.png"
            alt="sq-sample3"
          />
          <div className="author">
            <h5>
              Adisa Oyindasola <span> &copy;Content Developer</span>
            </h5>
          </div>
        </section>
        <section className="snip1157">
          <blockquote>
          From the initial consultation to the final deliverables, every step of the process was handled with professionalism, expertise, and utmost dedication. Your attention to detail, prompt responses, and willingness to go above and beyond truly set you apart.
            <div className="arrow"></div>
          </blockquote>
          <img
            src="/images/test2.jpg"
            alt="sq-sample27"
          />
          <div className="author">
            <h5>Fawale Mighty  <span>&copy;MightyMedia</span>
            </h5>
          </div>
        </section>
        <section className="snip1157">
          <blockquote className="h-64">
          I hope this message finds you well. I wanted to take a moment to express my deepest gratitude for the outstanding service you provided to me and my team.
            <div className="arrow"></div>
          </blockquote>
          <img
            src="/images/test3p.jpg"
            alt="sq-sample17"
          />
          <div className="author">
            <h5>
              Mathew Olamide<span> &copy;Software Developer</span>
            </h5>
          </div>
        </section>
        <section className="snip1157">
          <blockquote>
          Not only did you meet our expectations, but you exceeded them in every aspect. Your commitment to excellence was evident in the exceptional quality of the work you delivered. Your expertise and innovative solutions have made a significant impact on our project and have helped us achieve our goals.
            <div className="arrow"></div>
          </blockquote>
          <img
            src="/images/test4p.jpg"
            alt="sq-sample17"
          />
          <div className="author">
            <h5>
              Damilare Olayinka<span> &copy;Kingdom Expanders</span>
            </h5>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
