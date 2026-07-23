"use client";

import { useRef } from "react";

import EventFilters from "@/components/events/EventFilters";
import EventSection from "@/components/events/EventSection";
import { Search } from "lucide-react";

export default function EventsPage() {

    const preseasonRef =
        useRef<HTMLElement>(null);

    const week1Ref =
        useRef<HTMLElement>(null);

    const week2Ref =
        useRef<HTMLElement>(null);

    const week3Ref =
        useRef<HTMLElement>(null);

    const week4Ref =
        useRef<HTMLElement>(null);

    const week5Ref =
        useRef<HTMLElement>(null);

    const week6Ref =
        useRef<HTMLElement>(null);

    const week7Ref =
        useRef<HTMLElement>(null);

    const championshipRef =
        useRef<HTMLElement>(null);

    const offseasonRef =
        useRef<HTMLElement>(null);


    const events = {

        preseason: [
            {
                name: "Preseason Test Event",
                city: "São Paulo",
                country: "Brazil",
                startDate: "Jan 10",
                endDate: "Jan 12",
                teams: 24,
                favorite: true,
            },
        ],


        week1: [
            {
                name: "São Paulo Regional",
                city: "São Paulo",
                country: "Brazil",
                startDate: "Mar 6",
                endDate: "Mar 9",
                teams: 36,
                favorite: true,
            },

            {
                name: "Arkansas Regional",
                city: "Little Rock",
                country: "USA",
                startDate: "Mar 7",
                endDate: "Mar 10",
                teams: 42,
            },
        ],


        week2: [
            {
                name: "Miami Valley Regional",
                city: "Dayton",
                country: "USA",
                startDate: "Mar 13",
                endDate: "Mar 16",
                teams: 40,
            },
        ],


        week3: [
            {
                name: "Arkansas Regional",
                city: "Little Rock",
                country: "USA",
                startDate: "Mar 7",
                endDate: "Mar 10",
                teams: 42,
            },
        ],

        week4: [
            {
                name: "Arkansas Regional",
                city: "Little Rock",
                country: "USA",
                startDate: "Mar 7",
                endDate: "Mar 10",
                teams: 42,
            },
        ],

        week5: [
            {
                name: "Arkansas Regional",
                city: "Little Rock",
                country: "USA",
                startDate: "Mar 7",
                endDate: "Mar 10",
                teams: 42,
            },
        ],

        week6: [
            {
                name: "Arkansas Regional",
                city: "Little Rock",
                country: "USA",
                startDate: "Mar 7",
                endDate: "Mar 10",
                teams: 42,
            },
        ],

        week7: [
            {
                name: "Arkansas Regional",
                city: "Little Rock",
                country: "USA",
                startDate: "Mar 7",
                endDate: "Mar 10",
                teams: 42,
            },
        ],


        championship: [
            {
                name: "FIRST Championship",
                city: "Houston",
                country: "USA",
                startDate: "Apr 29",
                endDate: "May 2",
                teams: 600,
                favorite: true,
            },
        ],


        offseason: [
            {
                name: "Offseason Competition",
                city: "São Paulo",
                country: "Brazil",
                startDate: "Aug 15",
                endDate: "Aug 17",
                teams: 30,
            },
        ],

    };


    return (

        <main
            className="
                mx-auto
                max-w-7xl
                space-y-8
                px-6
                py-6
            "
        >

            {/* Search + Filters */}
            <section className="
        sticky
        top-20
        z-30
        mb-8
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/95
        p-4
        backdrop-blur
    ">

                {/* Search */}
                <div className="mb-4">
                    <div className="flex h-12 w-full items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 transition-colors focus-within:border-sky-500">
                        <Search className="h-5 w-5 shrink-0 text-slate-400" />

                        <input
                            type="text"
                            placeholder="Search events"
                            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Filters */}
                <EventFilters
                    sections={{
                        preseason: preseasonRef,
                        week1: week1Ref,
                        week2: week2Ref,
                        week3: week3Ref,
                        week4: week4Ref,
                        week5: week5Ref,
                        week6: week6Ref,
                        week7: week7Ref,
                        championship: championshipRef,
                        offseason: offseasonRef,
                        }}
                    />


            </section>


            {/* Events */}

            <div
                className="
                    space-y-12
                "
            >

                <EventSection
                    title="Preseason"
                    events={events.preseason}
                    sectionRef={preseasonRef}
                />


                <EventSection
                    title="Week 1"
                    events={events.week1}
                    sectionRef={week1Ref}
                />


                <EventSection
                    title="Week 2"
                    events={events.week2}
                    sectionRef={week2Ref}
                />


                <EventSection
                    title="Week 3"
                    events={events.week3}
                    sectionRef={week3Ref}
                />


                <EventSection
                    title="Week 4"
                    events={events.week4}
                    sectionRef={week4Ref}
                />


                <EventSection
                    title="Week 5"
                    events={events.week5}
                    sectionRef={week5Ref}
                />


                <EventSection
                    title="Week 6"
                    events={events.week6}
                    sectionRef={week6Ref}
                />


                <EventSection
                    title="Week 7"
                    events={events.week7}
                    sectionRef={week7Ref}
                />


                <EventSection
                    title="Championship"
                    events={events.championship}
                    sectionRef={championshipRef}
                />


                <EventSection
                    title="Offseason"
                    events={events.offseason}
                    sectionRef={offseasonRef}
                />

            </div>

        </main>

    );
}

