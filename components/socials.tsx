import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Socials() {
  return (
    <div id="socials">
      <h3>Socials</h3>
      <div className="border-secondary-muted mx-auto flex w-min gap-4 rounded-xl border-2 p-4 lg:mx-0">
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
  );
}
