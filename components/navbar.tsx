"use client";

import Link from "next/link";

import { Mail, User2 } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Concept",
    href: "#",
  },
  {
    name: "Apps",
    href: "#",
  },
  {
    href: "#",
    icon: <User2 />,
  },
  {
    href: "#",
    icon: <Mail />,
  },
];

type NavBarProps = {
  direction: "horizontal" | "vertical" | null;
};

export default function NavBar({ direction }: NavBarProps) {
  // Determine the direction of the list and apply appropriate styles
  let listDirectionClass = "";
  let listVisibility = "";
  let listStyle = "";

  if (direction === "horizontal") {
    listVisibility = "hidden xl:flex mb-2";
    listDirectionClass = "gap-9";
    listStyle = "bg-black text-xl";
  } else if (direction === "vertical") {
    listDirectionClass = "flex-col gap-9 items-center pt-4";
    listStyle = "";
  }

  return (
    <NavigationMenu className={listVisibility}>
      <NavigationMenuList className={listDirectionClass}>
        {routes.map((route, index) => (
          <NavigationMenuItem key={index}>
            <Link href={route.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${listStyle}`}
              >
                {route.name && route.name}
                {route.icon && route.icon}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
