import MainArticle from "./main-article";
import { Button } from "./ui/button";

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

export default function About() {
  return (
    <section id="about" className="">
      <h2 className="bg-black py-12 text-center text-white">About Us</h2>
      <div className="flex flex-col gap-12 py-12 md:px-36 px-16 bg-custombg">
        <MainArticle article={articles[3]} />
        <Button className="mx-auto w-min rounded-full">Meet the Team</Button>
      </div>
    </section>
  );
}
