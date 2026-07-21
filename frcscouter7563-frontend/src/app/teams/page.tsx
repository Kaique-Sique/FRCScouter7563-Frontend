import TeamCard from "@/components/team/TeamCard";
import { Star } from "lucide-react";

export default async function TeamsPage() {
  // TODO: Buscar da API
  const teams = [
    {
      team_key: "frc7563",
      team_number: 7563,
      nickname: "Megazord",
      organization: "SESI SENAI Robotics",
      city: "São Paulo",
      country: "Brazil",
      epa: 109.4,
      registered: true,
      favorite: true,
      avatar: "/logo.png",
    },
    {
      team_key: "frc1114",
      team_number: 1114,
      nickname: "Simbotics",
      organization: "St. Clement CSS",
      city: "Ontario",
      country: "Canada",
      epa: 104.2,
      registered: false,
      favorite: false,
    },
    {
      team_key: "frc2056",
      team_number: 2056,
      nickname: "OP Robotics",
      organization: "St. Clair College",
      city: "Ontario",
      country: "Canada",
      epa: 118.9,
      registered: false,
      favorite: false,
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-6">

      {/* Header */}

      <section className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Teams
        </h1>

        <p className="mt-2 text-slate-400">
          Browse FIRST Robotics Competition teams.
        </p>

      </section>

      {/* Actions */}

      <section className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4 md:flex-row md:items-center md:justify-between">

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 transition hover:bg-slate-800">

          <Star size={18} />

          Favorites

        </button>

        <div className="flex items-center gap-3">

          <span className="text-sm text-slate-400">
            Sort by
          </span>

          <select className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm outline-none transition focus:border-sky-500">

            <option>Team Number</option>

            <option>Team Name</option>

            <option>EPA</option>

            <option>Auto EPA</option>

            <option>Teleop EPA</option>

            <option>Rookie Year</option>

          </select>

        </div>

      </section>

      {/* Teams */}

      <section className="space-y-4">

        {teams.map((team) => (
          <TeamCard
            key={team.team_key}
            team={team}
          />
        ))}

      </section>

    </main>
  );
}