import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative px-10 pt-20 pb-4 md:px-20">
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="h-2/3 w-full bg-[#242424]"></div>
        <div className="h-1/3 w-full bg-black"></div>
      </div>
      <div className="relative z-10 flex justify-between text-sm text-white mb-4">
        <span>All rights reserved. Clueless 23|24.</span>
        <Link href="/">Powered by Pix Kitchen</Link>
      </div>
    </footer>
  );
}
