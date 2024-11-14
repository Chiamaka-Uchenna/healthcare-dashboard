"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/app/assets/TestLogo.svg";
import Profile from "@/app/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";
import {
  FaHome,
  FaUserFriends,
  FaCalendarAlt,
  FaEnvelope,
  FaReceipt,
  FaEllipsisV
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import clsx from "clsx";
import { IconType } from "react-icons";

interface NavLink {
  name: string;
  href: string;
  icon: IconType;
}

// Define the navigation links
const navLinks: NavLink[] = [
  { name: "Overview", href: "/overview", icon: FaHome },
  { name: "Patients", href: "/patients", icon: FaUserFriends },
  { name: "Schedule", href: "/schedule", icon: FaCalendarAlt },
  { name: "Message", href: "/message", icon: FaEnvelope },
  { name: "Transactions", href: "/transactions", icon: FaReceipt },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white w-full rounded-full">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={Logo} alt="Tech.Care Logo" width={100} height={100} />
      </div>

      {/* Nav Links */}
      <ul className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                "flex items-center space-x-2 px-3 py-2 rounded-full transition-colors",
                "body-emphasized hover:bg-teal hover:text-white",
                {
                  "bg-teal":
                    pathname === link.href ||
                    (pathname === "/" && link.name === "Patients"), // Active link styling
                }
              )}
            >
              <link.icon className="text-xl" />
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        <Image
          src={Profile}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col text-sm">
          <span className="body-emphasized">Dr. Jose Simmons</span>
          <span className="text-grey">General Practitioner</span>
        </div>

        <div className="flex gap-1 cursor-pointer">
          <FiSettings />
          <FaEllipsisV/>

        </div>
      </div>
    </nav>
  );
}
