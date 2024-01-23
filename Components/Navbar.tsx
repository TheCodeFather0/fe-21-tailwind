"use client";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-stone-900 text-slate-50">
      <div className="container px-5 md:px-0 mx-auto flex justify-between items-center h-16">
        <div className="font-semibold text-4xl">./Logo</div>

        <div
          className={`absolute md:static right-0 bg-stone-900 text-slate-50 top-16 pt-10 md:pt-0 h-full md:h-fit flex md:block flex-col w-72 md:w-fit items-center gap-4 duration-300 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          <Link className="ms-4 text-lg" href="/">
            Home
          </Link>
          <Link className="ms-4 text-lg" href="/portfolio">
            Portfolio
          </Link>
          <Link className="ms-4 text-lg" href="/services">
            Services
          </Link>
          <Link className="ms-4 text-lg" href="/about">
            About
          </Link>
          <Link className="ms-4 text-lg" href="/contact">
            Contact
          </Link>
        </div>

        <div className="block md:hidden">
          <div
            className={classNames({
              lines: true,
              activeLines: showMenu,
            })}
            onClick={() => setShowMenu((pre) => !pre)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
