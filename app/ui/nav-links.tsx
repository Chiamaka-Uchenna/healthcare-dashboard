'use client'

import { HomeIcon, } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const links = [
  { name: "Overview", href: "dashboard/overview", icon: HomeIcon },
  { name: "Patients", href: "/dashboard/patient/{id}",icon:  },
  { name: "Schedule", href: "/dashboard/schedule", icon:  },
  { name: "Message", href: "/dashboard/message", icon:  },
  { name: "Transactions", href: "/dashboard/transcations", icon:  },
];