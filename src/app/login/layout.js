"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const path = usePathname();
  return (
    <div>
      {path !== "/login/loginuser" ? (
        <ul>
          <li>
            <Link href="/about" style={{ background: "red" }}>
              About
            </Link>
          </li>
          <li>
            <Link href="/login/loginuser" style={{ background: "red" }}>
              Login
            </Link>
          </li>
        </ul>
      ) : null}
      {children}
    </div>
  );
};

export default Layout;
