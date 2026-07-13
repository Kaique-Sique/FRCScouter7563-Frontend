"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Trophy,
  GitCompareArrows,
  BarChart3,
  Star,
  Settings,
  X,
} from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
            fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
            ${
            open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
            }`}
        />

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
          border-r border-slate-800 bg-slate-950
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Header */}
        <div className="flex flex-col items-center border-b border-slate-800 px-6 py-8">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X size={20} />
          </button>


          <Image
            src="/logo.png"
            alt="Scouter7563 Logo"
            width={72}
            height={72}
            priority
          />

          <h2 className="mt-4 text-xl font-bold text-white">
            Scouter7563
          </h2>

          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500">
            SESI SENAI MEGAZORD
          </p>

        </div>


        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-6">

          <SidebarItem
            href="/"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
          />

          <SidebarItem
            href="/events"
            icon={<CalendarDays size={20} />}
            label="Events"
          />

          <SidebarItem
            href="/teams"
            icon={<Users size={20} />}
            label="Teams"
          />

          <SidebarItem
            href="/matches"
            icon={<Trophy size={20} />}
            label="Matches"
          />

          <SidebarItem
            href="/compare"
            icon={<GitCompareArrows size={20} />}
            label="Compare"
          />

          <SidebarItem
            href="/rankings"
            icon={<BarChart3 size={20} />}
            label="Rankings"
          />

          <SidebarItem
            href="/favorites"
            icon={<Star size={20} />}
            label="Favorites"
          />

        </nav>


        {/* Footer */}
        <div className="border-t border-slate-800 p-4">

          <SidebarItem
            href="/settings"
            icon={<Settings size={20} />}
            label="Settings"
          />

        </div>

      </aside>
    </>
  );
}


interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}


function SidebarItem({
  href,
  icon,
  label,
}: SidebarItemProps) {

  return (
    <Link
      href={href}
      className="
        flex items-center gap-3 rounded-lg px-4 py-3
        text-slate-300 transition-colors
        hover:bg-slate-800 hover:text-white
      "
    >
      {icon}

      <span>
        {label}
      </span>

    </Link>
  );
}