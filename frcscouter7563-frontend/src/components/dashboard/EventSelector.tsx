import {
  CalendarDays,
  Users,
  Trophy,
  Award,
} from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8">

      {/* Welcome */}
      <section className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Welcome to Scouter7563
        </h1>

        <p className="mt-2 text-slate-400">
          SESI SENAI Megazord FRC Scouting System
        </p>

      </section>


      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard
          title="Events"
          value="24"
          icon={<CalendarDays />}
        />

        <StatCard
          title="Teams"
          value="156"
          icon={<Users />}
        />

        <StatCard
          title="Matches"
          value="342"
          icon={<Trophy />}
        />

        <StatCard
          title="Awards"
          value="12"
          icon={<Award />}
        />

      </section>


      {/* Content */}
      <section className="mt-8 grid gap-6 lg:grid-cols-2">


        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-lg font-semibold text-white">
            Recent Events
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            No events available yet.
          </p>

        </div>


        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-lg font-semibold text-white">
            Latest Matches
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            No matches available yet.
          </p>

        </div>


      </section>


    </div>
  );
}



function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {

  return (
    <div className="
      rounded-xl
      border border-slate-800
      bg-slate-900
      p-5
      transition-colors
      hover:border-slate-700
    ">

      <div className="flex items-center justify-between">

        <p className="text-sm text-slate-400">
          {title}
        </p>

        <div className="text-slate-400">
          {icon}
        </div>

      </div>


      <p className="mt-4 text-3xl font-bold text-white">
        {value}
      </p>

    </div>
  );
}