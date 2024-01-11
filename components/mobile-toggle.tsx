import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import MobileNavBar from "./mobile-navbar";
import NavBar from "./navbar";
import Image from "next/image";

export default function MobileToggle() {
  return (
    <Sheet>
      <SheetTrigger>
          <Menu className="lg:hidden" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col items-center">
        <SheetHeader className="mt-12 ">
          <SheetTitle className="flex justify-center items-center gap-1">
            <Image
                src='/cluelessLogo.svg'
                alt="Clueless Logo"
                width={25}
                height={25}

                className="invert"
            />
            <h3 className="font-palomino text-xl">Clueless</h3>
          </SheetTitle>
          <SheetDescription className="text-center text-muted-foreground">
            Mindful living made easy
          </SheetDescription>
        </SheetHeader>
        <NavBar direction='vertical' />
      </SheetContent>
    </Sheet>
  );
}
