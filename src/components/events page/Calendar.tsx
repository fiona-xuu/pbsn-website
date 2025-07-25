type Event = {
    title: string;
    date: string; // ISO format: "2024-09-19"
};

const events: Event[] = [
    { title: "AGM", date: "2025-09-19" },
    { title: "Aspire Case Comp", date: "2025-10-18" },
    { title: "Catalyze Case Comp", date: "2025-11-29" },
    { title: "Event", date: "2024-12-10" },
    { title: "Event", date: "2025-01-15" },
    { title: "Event", date: "2025-02-01" },
    { title: "Event", date: "2025-03-01" },
    { title: "Event", date: "2025-04-01" },
];

const getMonthDay = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
        month: date.toLocaleString("default", { month: "short" }) + ".",
        day: date.getDate().toString().padStart(2, "0"),
    };
};

const Calendar = () => {
    // Zero out the time for today
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Filter and sort events
    const upcoming = events
        .filter(e => {
            const eventDate = new Date(e.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate >= today;
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 6);

    return (
        <section className="max-w-4xl mx-auto mt-10">
            <div className="flex items-center mb-8">
                <h2 className="text-2xl font-bold text-[#06162c] mr-6">Upcoming Events</h2>
                <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {upcoming.map((event, idx) => {
                    const { month, day } = getMonthDay(event.date);
                    return (
                        <div
                            key={idx}
                            className="bg-white rounded shadow-md overflow-hidden flex flex-col"
                            style={{ minHeight: 220 }}
                        >
                            <div className="flex-1 p-4">
                                <div className="font-bold text-[#06162c] text-base mb-4">{event.title}</div>
                                <div className="text-[#06162c] text-lg font-medium">
                                    {month}
                                    <br />
                                    <span className="text-2xl font-bold">{day}</span>
                                </div>
                            </div>
                            <div className="bg-gray-300 h-20 w-full" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Calendar;