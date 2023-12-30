import "../css/service.css";
import { motion } from "framer-motion";


const Services = () => {
  return <section className="service px-10 mmd:px-4"id="Service">
    <header className="service_header">
    <motion.div
        className="w-full p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="header-title masthead text-4xl pb-10 pt-10">What I <span className="text-tet">Offer</span></h1>
      </motion.div>
	
</header>
<main className="main">
	<article className="entry entry-lede">
		<img className="entry-img" src="/images/why-you-need-website.jpg" alt="why-you-need-website" />
		<div className="entry-content">
			<h1 className="entry-headline primary-headline text-pry text-3xl">Website Development</h1>
			<time className="entry-date meta">Website Development</time>
			<span className="entry-byline meta">Website Development</span>
			<p className="entry-summary">Do you feel outdated, outsourced, and not getting the trill of clients? we ascertain you will be up to date and will always get first-hand information by developing a website for you. With a website, you are sure to be on the top line of your business counterparts.</p>
		</div>
	</article>
	<article className="entry">
		
        <img className="entry-img" src="/images/GR7w.gif" alt="web design" />
		<h1 className="entry-headline primary-headline text-pry text-3xl">Website Design</h1>
		<time className="entry-date meta">Website Design</time>
		<span className="entry-byline meta">Website Design</span>
		<p className="entry-summary">Ever wonder why your guest don`t spend quality time on your websites? Are you Looking forward to boosting your business views and patronage? Without going too far, by integrating the latest design syntax and structures, our designs will always keep your guest at your doorstep 24/7.</p>
	</article>
	<article className="entry">
    <img className="entry-img" src="/images/ttsOJQ0.png" alt="Reasons why you need a website" />
		<h1 className="entry-headline primary-headline text-pry text-3xl">Website Managment</h1>
		<time className="entry-date meta">Website Managment</time>
		<span className="entry-byline meta">Website Managment</span>
		<p className="entry-summary">The inability to generate the required site traffic, and having issues with glitches and bugs is such a pain. Therefore, our priorities are to ensure a smooth transition between your websites and incoming users while taking care of generating traffic and keeping your websites updated with the latest information, we guarantee to boost the views of your website.</p>
	</article>
	<section className="trending">
		<article className="trending-entry">
        <img className="entry-img" src="/images/consulting.png" alt="Consulting" />
			<time className="trending-entry-date meta text-3xl text-pry">CONSULTING</time>
			<h1 className="trending-entry-headline primary-headline">Do you feel lost and not on track in your business? or as a developer, do you see yourself losing your clients daily? a stitch in time saves nine, we are always available to be your go-to get answers, with just the right amount of push and boost, we are sure to put you on your high wings soaring the skies.</h1>
		</article>
		
	</section>
</main>
  </section>;
};

export default Services;
