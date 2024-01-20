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
    name: "Concept",
    href: "#",
  },
  {
    name: "Apps",
    href: "#",
  },
  {
    name: "About",
    href: "/about",
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
    listVisibility = "hidden lg:flex";
    listDirectionClass = "gap-9";
    listStyle = "bg-black text-xl";
  } else if (direction === "vertical") {
    listDirectionClass = "flex-col gap-9 items-center";
    listStyle = "";
  }

  return (
    <NavigationMenu className={`${listVisibility}`}>
      <NavigationMenuList className={`${listDirectionClass}`}>
        {routes.map((route, index) => (
          <NavigationMenuItem className="" key={index}>
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
