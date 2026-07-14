"use client";

import { useState } from "react";

import {
  Users,
  Trophy,
  ClipboardCheck,
  RefreshCw,
} from "lucide-react";

import EventSelector from "@/components/dashboard/EventSelector";
import StatCard from "@/components/dashboard/StatCard";


export default function Home() {

  const [event, setEvent] = useState("2026brbri");


  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8">

      <h1 className="text-3xl font-bold text-white">
        Dashboard
      </h1>


      {/* Current Event */}
      <div className="mt-6">
        <EventSelector
          selectedEvent={event}
          onChange={setEvent}
        />
      </div>


      {/* Statistics */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard
          title="Teams"
          value="42"
          icon={<Users />}
        />


        <StatCard
          title="Matches"
          value="78"
          icon={<Trophy />}
        />


        <StatCard
          title="Scouted"
          value="56/78"
          icon={<ClipboardCheck />}
        />


        <StatCard
          title="Sync"
          value="Online"
          icon={<RefreshCw />}
        />

      </section>


      {/* Next Match */}
      <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="text-lg font-semibold text-white">
          Next Match
        </h2>

        <p className="mt-3 text-slate-400">
          Qualification Match 23
        </p>

        <p className="mt-1 text-white">
          Red Alliance vs Blue Alliance
        </p>

      </section>


    </div>
  );
}