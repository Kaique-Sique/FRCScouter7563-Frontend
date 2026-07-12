import Link from "next/link";
import { Search, Moon, ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="border-b border-zinc-200 bg-zinc-900 text-zinc-300">
            <nav className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
                {/* Left */}
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl"
                    >
                        <Image
                            src="/logo-bg.png"
                            alt="Scouter7563 Logo"
                            width={40}
                            height={40}
                        />

                        <span className="text-white">Scouter7563</span>
                    </Link>

                    {/* Routes */}
                    <div className="flex items-center gap-6 text-sm font-medium">
                        <Link href="/events">Events</Link>
                        <Link href="/teams">Teams</Link>
                        <Link href="/matches">Matches</Link>
                        <Link href="/scouts">Scouts</Link>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-5">
                    <button aria-label="Search">
                        <Search size={20} />
                    </button>
                </div>
            </nav>
        </header>
    );
}

