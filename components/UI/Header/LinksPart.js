"use client";
import Link from "next/link";
import { links } from "../../../utils/constants";

export default function LinksPart({ desktop = false, className = "", onClick }) {
  return (
    <>
      {links.slice(desktop ? 1 : 0, links.length).map((link) => (
        <li key={link.href} className={`${className} `}>
          <Link onClick={onClick} href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
