"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../../../utils/constants";

export default function LinksPart({ desktop = false, className = "", onClick }) {
  const pathname = usePathname();
  const handle = pathname !== "/" && pathname.split("/").at(1);

  return (
    <>
      {links.slice(desktop ? 1 : 0, links.length).map((link) => (
        <li
          key={link.href}
          className={`${className} ${link.href.includes(handle) ? "text-pink" : ""}`}>
          <Link onClick={onClick} href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
