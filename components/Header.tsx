"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="global-header">
      <div className="global-nav">
        <Link className="approved-logo brand" href="/">
          <img src="/images/logo.svg" alt="Sportline Advantage Logo" style={{ height: '42px', width: 'auto', borderRadius: '4px' }} />
        </Link>
        <nav className={`nav-links ${isOpen ? "nav-open" : ""}`}>
          <div
            className={`nav-dropdown ${dropdownOpen ? "nav-dropdown-open" : ""}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/what-we-do"
              onClick={() => {
                setIsOpen(false);
                setDropdownOpen(false);
              }}
              className={`nav-dropdown-trigger ${pathname.startsWith("/what-we-do") ? "active" : ""}`}
            >
              WHAT WE DO
              <svg
                className="nav-dropdown-arrow"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <div className="nav-dropdown-menu">
              <Link
                href="/what-we-do#programs"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Performance Development
              </Link>
              <Link
                href="/what-we-do#pathways"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Pathways Program
              </Link>
              <Link
                href="/what-we-do#partnerships"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Partnership
              </Link>
              <Link
                href="/what-we-do#experiences"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Curated Sporting Experience
              </Link>
            </div>
          </div>
          <Link href="/about-us" onClick={() => setIsOpen(false)} className={pathname === "/about-us" ? "active" : ""}>
            ABOUT US
          </Link>
          <Link href="/partner-with-us" onClick={() => setIsOpen(false)} className={pathname === "/partner-with-us" ? "active" : ""}>
            PARTNER WITH US
          </Link>
          <Link href="/insights" onClick={() => setIsOpen(false)} className={pathname.startsWith("/insights") ? "active" : ""}>
            INSIGHTS
          </Link>
          <Link href="/connect-with-us" onClick={() => setIsOpen(false)} className={pathname === "/connect-with-us" ? "active" : ""}>
            CONNECT WITH US
          </Link>
        </nav>
        <button
          className="menu"
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
