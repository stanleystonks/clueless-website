import Image from "next/image";

type MainArticleProps = {
  article: {
    title: string;
    content: string;
    ball: string;
    direction: string;
  };
};

export default function MainArticle({ article }: MainArticleProps) {
  let articleDirection = "";
  let articleStyles = "";
  if (article.direction == "left") {
    articleDirection = "left-12 top-4 md:left-42";
    articleStyles = "lg:flex-row";
  } else if (article.direction == "right") {
    articleDirection = "right-12 top-4 md:right-42";
    articleStyles = "lg:flex-row-reverse";
  }
  return (
    <article
      className={`${articleStyles} relative isolate flex flex-col items-center text-center md:px-32 md:text-left lg:gap-24`}
    >
      <h2 className="mb-8">{article.title}</h2>
      <Image
        src={article.ball}
        width={150}
        height={150}
        alt="Brown ball"
        className={`absolute z-[-1] ${articleDirection}`}
      />
      <p
        className="rounded-2xl bg-white p-6 md:p-16"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></p>
    </article>
  );
}
