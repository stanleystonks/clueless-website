import { Facebook, Instagram, Linkedin } from "lucide-react";
import AccordionArticle from "./accordion-article";
import MainArticle from "./main-article";
import { Button } from "./ui/button";
import Link from "next/link";

const articles = [
  {
    title: "What",
    content:
      "<b>Clueless</b> is a transformative concept designed to empower individuals on their journey to a more fulfilling life.<br /><br />Our approach is centered on three core areas: time, resources, and energy.<br /><br />We provide practical tools and expert guidance to assist you in tracking and managing these essential aspects, enabling you to achieve your goals and live a purpose-driven life.",
    ball: "/brownBall.svg",
    direction: "left",
  },
  {
    title: "Why",
    content:
      "Choosing <b>Clueless</b> means choosing a path to self-discovery and personal growth. In a world filled with distractions and challenges, our concept offers clarity and direction.<br /><br />We believe that everyone has untapped potential waiting to be realized. With Clueless, you'll gain the confidence and skills needed to harness that potential fully. We're here to help you create a future that you’re proud of.",
    ball: "/greenBall.svg",
    direction: "right",
  },
  {
    title: "How",
    content:
      "We've simplified the journey to self-improvement. We start by providing you with practical guidance and powerful tools to track and manage your time, resources, and energy effectively.<br /><br />Our user-friendly approach allows you to set and achieve meaningful goals. You'll gain the ability to make informed decisions, nurture mindfulness, and lead a life that's in harmony with your values.",
    ball: "/blueBall.svg",
    direction: "left",
  },
  {
    title: "Who",
    content:
      "Hi, I'm Rosie, the mind behind Clueless. With an unwavering love for understanding the human mind and behavior, I've embarked on a journey in the realm of self-development.<br/><br/>Clueless is the result of my dedication to making mindful living accessible to all. I'm passionate about helping individuals unlock their full potential, and I can’t wait to share my insights and expertise with you.",
    ball: "/rectangle.svg",
    direction: "left",
  },
];

const accordionArticles = [
  {
    title: "Our Blog",
    content:
      "<p>Discover a wealth of insights, tips, and inspiration to fuel your journey towards mindful living and personal growth.</p><br/><p>Our blog is your go-to source for practical advice and thought-provoking articles that will empower your path to a more fulfilling and joyous life.</p><br/><p>Let's learn and grow together.</p>",
    button: "Read Now",
  },
  {
    title: "Our Apps",
    content:
      "<p>Explore a world of empowering tools at your fingertips with our collection of Clueless apps.</p><br/><p>From mindful time management to resource optimization and energy alignment, our suite of apps is designed to elevate your life.</p><br/><p>Each app is crafted to guide you on your journey to a more purpose-driven life.</p>",
    button: "Free Download",
  },
];

export default function Main() {
  return (
    <main className="">
      <div
        id="introduction"
        className="flex flex-col gap-12 bg-custombg px-16 py-12 md:px-0"
      >
        <MainArticle article={articles[0]} />
        <MainArticle article={articles[1]} />
        <MainArticle article={articles[2]} />
        <Button
          size="custom"
          className="mx-auto rounded-full font-semibold text-white"
        >
          Learn More
        </Button>
      </div>

      <div
        id="products"
        className="flex flex-col justify-center gap-12 bg-white px-16 py-12 lg:flex-row lg:px-0"
      >
        <AccordionArticle article={accordionArticles[0]} />
        <AccordionArticle article={accordionArticles[1]} />
      </div>

      <section id="about">
        <h2 className="bg-black py-12 text-center text-white">About Us</h2>
        <div className="flex flex-col gap-12 bg-custombg px-16 py-12 md:px-0">
          <MainArticle article={articles[3]} />
          <Button className="mx-auto w-min rounded-full">Meet the Team</Button>
        </div>
      </section>

      <section id="contact" className="py-4 text-center lg:text-left">
        <h2 className="relative top-8 px-32 md:top-10">Lets Talk!</h2>
        <div className="flex flex-col justify-between gap-20 lg:gap-32 bg-custombg px-16 py-20 lg:flex-row lg:px-32">
          <div className="flex flex-1 flex-col justify-between gap-12">
            <div className="italic">
              <p>
                Whether youre on a personal quest for mindful living or a
                fellow psychologist with a shared passion for self-development,
                were eager to connect with you.
              </p>
              <br />
              <p>
                At Clueless, we believe in the power of community,
                collaboration, and growth.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div id="email">
                <h3>Email</h3>
                <span className="font-bold">
                  <a href="mailto:support@clueless.com">support@clueless.com</a>
                </span>
              </div>
              <div id="socials">
                <h3>Socials</h3>
                <div className="flex gap-4 border-2 w-min p-4 rounded-xl border-secondary-muted mx-auto lg:mx-0">
                  <Link href="#">
                    <Instagram />
                  </Link>
                  <Link href="#">
                    <Linkedin />
                  </Link>
                  <Link href="#">
                    <Facebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <form className="flex flex-1 flex-col text-left">
            <label htmlFor="">One</label>
            <input type="text" />
            <label htmlFor="">Two</label>
            <input type="text" />
            <label htmlFor="">Three</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </form>
        </div>
      </section>
    </main>
  );
}
