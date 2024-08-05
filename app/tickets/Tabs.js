"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "../../components/Dropdown";
import { ChevronIcon } from "../../components/UI/icons";
const tabs = [
  {
    href: "ga",
    label: "General Admission(GA)",
  },
  {
    href: "vip",
    label: "VIP",
  },
  {
    href: "wip",
    label: "VVIP",
  },
  {
    href: "companion",
    label: "Companion Cards",
  },
  {
    href: "payment-plans",
    label: "Payment Plans",
  },
  {
    href: "refunds",
    label: "Refunds",
  },
];
export default function Tabs() {
  const pathname = usePathname();
  return (
    <>
      <div className="lg:hidden">
        <Dropdown
          triggerEl={
            <button className="w-full  p-4 bg-black rounded-10 flex justify-between items-center gap-2">
              {tabs.find((tab) => pathname.endsWith(tab.href))?.label}
              <ChevronIcon className="rotate-180" />
            </button>
          }>
          <div className="flex flex-col  py-2 flex-wrap bg-black">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                className={`py-1 px-4   ${
                  pathname.endsWith(tab.href) ? " text-pink" : "text-white"
                }`}
                href={tab.href}>
                {tab.label}
              </Link>
            ))}
          </div>
        </Dropdown>
      </div>
      <div className="hidden lg:flex   gap-2 flex-wrap">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            className={`py-4 px-6  border border-pink hover:bg-white hover:text-pink rounded-10 ${
              pathname.endsWith(tab.href) ? "bg-white text-pink" : "bg-pink"
            }`}
            href={tab.href}>
            {tab.label}
          </Link>
        ))}
      </div>
    </>
  );
}
