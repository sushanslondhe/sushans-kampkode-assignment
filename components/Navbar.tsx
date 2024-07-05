"use client";
import { ChevronDown, Menu } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { FloatingNav } from "./ui/Floating-navbar-ui";
export default function Navbar() {
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
}

const navItems = [
  {
    name: "Home",
    link: "/",
    dropdown: false,
  },
  {
    name: "Product",
    link: "/products",
    dropdown: true,
  },
  {
    name: "Resources",
    link: "/resources",
    dropdown: true,
  },
  {
    name: "Pricing",
    link: "/pricing",
    dropdown: false,
  },
];
