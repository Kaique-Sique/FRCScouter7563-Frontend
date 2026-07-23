import EventCard from "@/components/events/EventCard";

interface EventSectionProps {
    title: string;
    events: Array<{
        name: string;
        city: string;
        country: string;
        startDate: string;
        endDate: string;
        teams: number;
        favorite?: boolean;
    }>;
    sectionRef?: React.RefObject<HTMLElement>;
}

export default function EventSection({
    title,
    events,
    sectionRef,
}: EventSectionProps) {

    return (
        <section
            ref={sectionRef}
            id={title.toLowerCase().replace(" ", "")}
            className="scroll-mt-60 space-y-4"
        >

            {/* Section Header */}
            <div className="flex items-center gap-4">

                <h2
                    className="
                        text-lg
                        font-semibold
                        text-white
                        whitespace-nowrap
                    "
                >
                    {title}
                </h2>


                <div
                    className="
                        h-px
                        flex-1
                        bg-slate-800
                    "
                />

            </div>


            {/* Events */}
            <div
                className="
                    space-y-3
                "
            >

                {events.map((event) => (

                    <EventCard
                        key={event.name}
                        event={event}
                    />

                ))}

            </div>

        </section>
    );
}