import Image from "next/image";
import Link from "next/link";

import MobileToggle from "./mobile-toggle";
import NavBar from "./navbar";

import logo from "../public/cluelessLogoFull.svg";
import logoMobile from "../public/cluelessLogo.svg";

export default function Header() {
  return (
    <header className="relative flex items-end justify-between px-10 pb-4 font-palomino text-white md:px-20 h-32 md:h-36">
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="h-1/3 w-full bg-[#242424]"></div>
        <div className="h-2/3 w-full bg-black"></div>
      </div>
      <Link href="/" className="relative z-10 flex items-center">
        <Image
          src={logo}
          alt="Clueless Logo"
          width={300}
          priority
          className="hidden lg:block"
        />
        <Image
          src={logoMobile}
          alt="Clueless Logo"
          width={98}
          priority
          className="hidden md:block lg:hidden"
        />
        <Image
          src={logoMobile}
          alt="Clueless Logo"
          width={55}
          priority
          className="md:hidden"
        />
        <h1 className="sr-only">Clueless</h1>
      </Link>
      <MobileToggle />
      <NavBar direction="horizontal" />
    </header>
  );
}
