import Link from "next/link";

import { Globe } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-600 bg-black text-zinc-300">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 text-sm">
                {/* Left */}
                <span>Made by Team 7563</span>

                {/* Center */}
                <Link
                    href="https://www.thebluealliance.com"
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition-colors"
                >
                    Data provided by The Blue Alliance
                </Link>

                {/* Right */}
                <div className="flex items-center gap-5">
                    <Link href="https://megazord7563.com.br" target="_blank">
                        <Globe size={18} />
                    </Link>

                    <Link href="https://instagram.com/megazord7563" target="_blank">
                        <FaInstagram size={18} />
                    </Link>

                    <Link href="https://github.com/Kaique-Sique" target="_blank">
                        <FaGithub size={18} />
                    </Link>
                </div>
            </div>
        </footer>

    );
}
