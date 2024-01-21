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

import logo from "../public/cluelessLogoFull.svg"

export default function MobileToggle() {
  return (
    <Sheet>
      <SheetTrigger>
          <Menu className="xl:hidden relative z-10 mb-4 md:mb-5" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col items-center">
        <SheetHeader className="mt-12 ">
          <SheetTitle className="flex justify-center items-center gap-1">
            <Image
                src={logo}
                alt="Clueless Logo"
                width={180}

                className="invert"
            />
            {/* <h3 className="font-palomino text-xl">Clueless</h3> */}
          </SheetTitle>
          {/* <SheetDescription className="text-center text-muted-foreground">
            Mindful living made easy
          </SheetDescription> */}
        </SheetHeader>
        <NavBar direction='vertical' />
      </SheetContent>
    </Sheet>
  );
}
