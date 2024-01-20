import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { ContainerIcon } from "lucide-react";

type accordionProps = {
    article: {
        title: string;
        content: string;
        button: string;
    }
};

export default function AccordionArticle({ article }: accordionProps) {
  return (
    <article className="flex w-full flex-col items-center rounded-xl border-2 py-6 lg:w-1/2">
      <Accordion type="single" collapsible className="w-full px-12">
        <AccordionItem value="item-1" className="">
          <AccordionTrigger className="font-palomino text-6xl">
            {article.title}
          </AccordionTrigger>
          <AccordionContent className="h-60">
            <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button variant="custom" className="mt-4 bg-[#94B8A6] rounded-full">{article.button}</Button>
    </article>
  );
}
