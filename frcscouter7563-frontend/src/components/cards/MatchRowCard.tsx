import TeamBadge from "@/components/ui/TeamBadge";

interface Team {
  team: number;
  favorite?: boolean;
}

interface MatchRowProps {
  match: string;
  red: Team[];
  blue: Team[];
}

export default function MatchRow({
  match,
  red,
  blue,
}: MatchRowProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">

      <h3 className="font-medium text-white">
        {match}
      </h3>

      {/* RED */}
      <div className="mt-3 flex items-center gap-3">

        <span className="w-12 font-semibold text-red-400">
          RED
        </span>

        <div className="flex flex-wrap gap-2">

          {red.map((team) => (
            <TeamBadge
              key={team.team}
              team={team.team}
              alliance="red"
              favorite={team.favorite}
            />
          ))}

        </div>

      </div>

      {/* BLUE */}
      <div className="mt-3 flex items-center gap-3">

        <span className="w-12 font-semibold text-blue-400">
          BLUE
        </span>

        <div className="flex flex-wrap gap-2">

          {blue.map((team) => (
            <TeamBadge
              key={team.team}
              team={team.team}
              alliance="blue"
              favorite={team.favorite}
            />
          ))}

        </div>

      </div>

    </div>
  );
}