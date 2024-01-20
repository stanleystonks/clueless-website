import Image from "next/image";
import Link from "next/link";

import MobileToggle from "./mobile-toggle";
import NavBar from "./navbar";

export default function Header() {
  return (
    <header className="font-palomino flex items-center justify-between bg-black px-10 md:px-20 text-white">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/cluelessLogo.svg"
          alt="Clueless Logo"
          width={80}
          height={80}
          priority

          className="w-10 md:w-20"
        />
        <h1 className="hidden text-5xl md:block">Clueless</h1>
      </Link>
      <MobileToggle />
      <NavBar direction='horizontal' />
    </header>
  );
}
