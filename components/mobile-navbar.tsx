import Image from "next/image";
import Link from "next/link";

export default function MobileNavBar() {
  return (
    <nav className="w-1/3 text-black">
      <ul className="flex flex-col items-center justify-between text-3xl">
        <li>
          <Link href="#">Concept</Link>
        </li>
        <li>
          <Link href="#">Apps</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/userIcon.svg" width={25} height={25} alt="User Icon" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/messageIcon.svg"
              width={25}
              height={25}
              alt="Message Icon"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
