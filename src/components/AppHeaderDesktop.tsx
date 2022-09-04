import React, { ReactElement, useEffect, useState } from "react";
import cn from "classnames";

export default function AppHeaderDesktop(): ReactElement {
  const [urlHash, setUrlHash] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrlHash(window.location.hash);
      const el: HTMLElement | null = document.querySelector(
        window.location.hash
      );
      if (el) el.scrollIntoView();
    }
  }, []);

  return (
    <div className="sticky top-0 z-30 hidden bg-gray-900 py-8 md:block">
      <div className="constrained">
        <nav
          role="navigation"
          aria-label="Main menu"
          className="flex items-center justify-between"
        >
          <div className="h-12 w-12 lg:h-16 lg:w-16">
            <button
              type="button"
              onClick={() => {
                setUrlHash("");
                window.history.pushState(
                  null,
                  document.title,
                  `${window.location.pathname}${window.location.search}`
                );
                window.scrollTo(0, 0);
              }}
            >
              <img
                src="images/_logo-zack-jackson.svg"
                alt="Zack Jackson logo - a square with a 'Z' in it"
                className="h-full w-full"
              />
            </button>
          </div>
          <ul className="flex items-center">
            <li>
              <a
                href="#about"
                className={cn("nav-link", {
                  active: urlHash === "#about",
                })}
                onClick={() => setUrlHash("#about")}
              >
                About
              </a>
            </li>
            <li className="ml-6 lg:ml-12">
              <a
                href="#experience"
                className={cn("nav-link", {
                  active: urlHash === "#experience",
                })}
                onClick={() => setUrlHash("#experience")}
              >
                Work
              </a>
            </li>
            <li className="ml-6 lg:ml-12">
              <a
                href="#contact"
                className={cn("nav-link", {
                  active: urlHash === "#contact",
                })}
                onClick={() => setUrlHash("#contact")}
              >
                Contact
              </a>
            </li>
            <li className="ml-6 lg:ml-12">
              <a href="/resume" className="nav-link">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
