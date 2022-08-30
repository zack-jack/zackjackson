import React, { ReactElement, useEffect, useState } from "react";
import cn from "classnames";

export default function AppHeaderMobile(): ReactElement {
  const [urlHash, setUrlHash] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (window?.location?.hash) {
      setUrlHash(window.location.hash);
    }
  }, []);

  const handleLinkClick = (urlHash: string): void => {
    setUrlHash(urlHash);
    setIsExpanded(false);
  };

  return (
    <div className="sticky top-0 z-30 bg-gray-900 md:hidden">
      <nav
        role="navigation"
        aria-labelledby="header-mobile-hamburger-btn"
        className="relative flex w-screen items-center justify-end py-4 px-6"
      >
        <button
          id="header-mobile-hamburger-btn"
          aria-controls="header-mobile-navigation-menu"
          aria-expanded={isExpanded}
          aria-haspopup="true"
          aria-label={isExpanded ? "Close Menu" : "Open Menu"}
          type="button"
          className={cn("hamburger", { open: isExpanded })}
          onClick={() => setIsExpanded((prevState) => !prevState)}
        >
          <div aria-hidden="true" className="hamburger-bars">
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
          </div>
        </button>
        <div
          className={cn(
            "absolute inset-0 flex h-screen w-screen flex-col items-end justify-center bg-gray-700",
            isExpanded ? "visible" : "invisible"
          )}
        >
          <ul
            id="header-mobile-navigation-menu"
            role="menu"
            className="flex w-full flex-col gap-6 py-6 px-8"
          >
            <li role="none">
              <a
                href="#about"
                role="menuitem"
                className={cn("nav-link", {
                  active: urlHash === "#about",
                })}
                onClick={() => handleLinkClick("#about")}
              >
                About
              </a>
            </li>
            <li role="none">
              <a
                href="#experience"
                role="menuitem"
                className={cn("nav-link", {
                  active: urlHash === "#experience",
                })}
                onClick={() => handleLinkClick("#experience")}
              >
                Work
              </a>
            </li>
            <li role="none">
              <a
                href="#contact"
                role="menuitem"
                className={cn("nav-link", {
                  active: urlHash === "#contact",
                })}
                onClick={() => handleLinkClick("#contact")}
              >
                Contact
              </a>
            </li>
            <li role="none">
              <a href="/resume" role="menuitem" className="nav-link">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
