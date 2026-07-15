"use client";

import { useState } from "react";

import EventSelector from "@/components/dashboard/EventSelector";
import MatchSelector, {
  Match,
} from "@/components/scout/MatchSelector";
import AlliancePanel from "@/components/scout/AlliancePanel";
import StartScoutButton from "@/components/scout/StartScoutButton";
import { CompetitionLevel } from "@/types/enums/CompetitionLevel";

const matches: Match[] = [
  {
    key: "2026brsp_qm1",
    matchNumber: 1,
    competitionLevel: CompetitionLevel.Qualification,
  },
  {
    key: "2026brsp_qm2",
    matchNumber: 2,
    competitionLevel: CompetitionLevel.Qualification,
  },
  {
    key: "2026brsp_qm3",
    matchNumber: 3,
    competitionLevel: CompetitionLevel.Qualification,
  },
];

const redAlliance = [
  {
    key: "frc7563",
    number: 7563,
    nickname: "Megazord",
    avatar: "",
    station: "R1",
  },
  {
    key: "frc1156",
    number: 1156,
    nickname: "Iron Phoenix",
    avatar: "",
    station: "R2",
  },
  {
    key: "frc1772",
    number: 1772,
    nickname: "Thunder Robotics",
    avatar: "",
    station: "R3",
  },
];

const blueAlliance = [
  {
    key: "frc4481",
    number: 4481,
    nickname: "Blue Titans",
    avatar: "",
    station: "B1",
  },
  {
    key: "frc4613",
    number: 4613,
    nickname: "Cyber Wolves",
    avatar: "",
    station: "B2",
  },
  {
    key: "frc5987",
    number: 5987,
    nickname: "Quantum Bots",
    avatar: "",
    station: "B3",
  },
];

export default function ScoutPage() {
  const [selectedMatch, setSelectedMatch] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8">

      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-white">
          Scout Preparation
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Prepare and start a new scouting session.
        </p>
      </section>


      {/* Event */}
      <section>
        <EventSelector />
      </section>


      {/* Match */}
      <section>
        <MatchSelector
          matches={matches}
          selectedMatch={selectedMatch}
          onChange={setSelectedMatch}
        />
      </section>


      {/* Alliances */}
      <section className="grid gap-6 lg:grid-cols-2">

        <AlliancePanel
          title="Red Alliance"
          alliance="red"
          teams={redAlliance}
          selectedTeam={selectedTeam}
          onSelectTeam={setSelectedTeam}
        />

        <AlliancePanel
          title="Blue Alliance"
          alliance="blue"
          teams={blueAlliance}
          selectedTeam={selectedTeam}
          onSelectTeam={setSelectedTeam}
        />

      </section>


      {/* Action */}
      <section className="flex justify-center pt-2">
        <StartScoutButton />
      </section>

    </main>
  );
}
