"use client";
import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import menuItems from "@/data/menuItems";
import Link from "next/link";
import { useBasePath } from "../context/BasePathContext";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const basePath = useBasePath();

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isNavOpen]);

  return (
    <header className="pt-3 pb-3 w-full z-10 md:absolute">
      <div className="menu-mobile lg:hidden">
        <div
          className="hamburger-icon space-y-2 absolute right-6 top-1/2 -translate-y-1/2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8  bg-white"></span>
          <span className="block h-0.5 w-8  bg-white"></span>
          <span className="block h-0.5 w-8  bg-white"></span>
        </div>
        <div
          className={isNavOpen ? "showMenuNav h-screen  px-6" : "hideMenuNav"}
        >
          <div
            className="absolute  top-1.5 -right-1 px-5 py-7"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-9 w-9 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="phone-contact  lg:flex">
            <ul>
              <li>
                <a
                  className="flex items-center text-white"
                  target="_blank"
                  href="tel:+44 20 1234 5678"
                >
                  <span className="border block rounded-full border-solid w-8 h-8 border-white">
                    <FontAwesomeIcon className="text-sm  p-2 " icon={faPhone} />
                  </span>
                  <span className="ml-2 text-sm">+44 20 1234 5678</span>
                </a>
              </li>
            </ul>
          </div>
          <ul className="menu w-full lg:space-x-10 ">
            {menuItems.map((item) => (
              <li key={item.id} className="lg:pb-0 lg:pt-0 pb-5 pt-5">
                <a
                  className="relative text-white text-sm uppercase"
                  href={item.link}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex  items-center container mx-auto">
        {/** Logo */}
        <div className="relative">
          <Link className="logo relative z-10" href="/">
            <img
              className="w-20"
              src={`${basePath}/images/logo4.png`}
              alt="logo"
            />
          </Link>
        </div>
        {/** Navigation */}
        <nav className="lg:flex flex-grow justify-center hidden">
          <ul className="flex space-x-10">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  className="relative text-white text-sm uppercase"
                  href={item.link}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/** Social media  */}
        <div className="phone-contact ml-auto hidden lg:flex">
          <ul>
            <li>
              <a
                className="flex items-center text-white"
                target="_blank"
                href="tel:+44 20 1234 5678"
              >
                <span className="border block rounded-full border-solid w-8 h-8 border-white">
                  <FontAwesomeIcon className="text-sm  p-2 " icon={faPhone} />
                </span>
                <span className="ml-2 text-sm">+44 20 1234 5678</span>
              </a>
            </li>
          </ul>
        </div>
        {/** Dark mode */}
        <div></div>
      </div>
    </header>
  );
}

export default Header;
