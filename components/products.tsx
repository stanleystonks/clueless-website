import AccordionArticle from "./accordion-article";

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

export default function Products() {
  return (
    <div
      id="products"
      className="flex flex-col justify-between gap-12 bg-white px-16 py-12 lg:flex-row md:px-36"
    >
      <AccordionArticle article={accordionArticles[0]} />
      <AccordionArticle article={accordionArticles[1]} />
    </div>
  );
}
