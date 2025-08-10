type Event = {
    title: string;
    date: string; // ISO format: "2024-09-19"
};

const events: Event[] = [
    { title: "University 101", date: "2025-07-23" },
    { title: "Summer Speed Chats", date: "2025-18-07" },
    { title: "Summer Dinner", date: "2025-08-22" },
    { title: "Resume Roast & Revise", date: "2025-08-26" },
    { title: "Explore Series - Consulting", date: "2025-09-11" },
    { title: "Explore Series - Finance", date: "2025-09-18" },
    { title: "Annual General Meeting", date: "2025-09-19" },
    { title: "Explore Series - Tech", date: "2025-09-25" },
    { title: "2nd Year Consulting Crash Course", date: "2025-10-02" },
    { title: "Member's Network", date: "2025-10-07" },
    { title: "Internship Program - Info Session", date: "2025-10-12" },
    { title: "Aspire Case Competition", date: "2025-10-18" },
    { title: "Career's Panel", date: "2025-10-28" },
    { title: "Career's Panel", date: "2025-10-29" },
    { title: "Marketing Case Competition", date: "2025-11-16" },
    { title: "Catalyze Case Competition", date: "2025-11-29" },
    { title: "Member's Network Reconnect", date: "2026-01-12" },
    { title: "Woman In Business Case Competition", date: "2026-01-17" },
    { title: "Firm's Trip", date: "2026-01-23" },
    { title: "Interview Case Competition", date: "2026-01-31" },
    { title: "Stock Pitch Competition", date: "2026-03-01" },
    { title: "Connect Conference", date: "2026-03-07" },
    { title: "Connect Conference", date: "2026-03-08" }
];

const getMonthDay = (dateStr: string) => {
    // Parse the date string and ensure it's in local timezone
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day); // month is 0-indexed in JavaScript
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
            // Parse event date in local timezone
            const [year, month, day] = e.date.split('-').map(Number);
            const eventDate = new Date(year, month - 1, day);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate >= today;
        })
        .sort((a, b) => {
            // Parse dates in local timezone for sorting
            const [yearA, monthA, dayA] = a.date.split('-').map(Number);
            const [yearB, monthB, dayB] = b.date.split('-').map(Number);
            const dateA = new Date(yearA, monthA - 1, dayA);
            const dateB = new Date(yearB, monthB - 1, dayB);
            return dateA.getTime() - dateB.getTime();
        })
        .slice(0, 6);

    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-6xl mx-auto px-4 pt-6 pb-14">
                {/* Title with line */}
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    Upcoming Events
                    <span className="flex-1 h-px bg-gray-400 ml-3 mr-10"></span>
                </h2>

                {/* Event Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 px-16 pt-4">
                    {upcoming.map((event, idx) => {
                        const { month, day } = getMonthDay(event.date);
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
                                style={{ minHeight: 400 }}
                            >
                                {/* Top section with event info */}
                                <div className="flex-1 p-8 flex flex-col justify-between">
                                    <div className="font-semibold text-black text-2xl mb-4 tracking-wide">
                                        {event.title}
                                    </div>
                                    <div className="text-black">
                                        <span className="text-3xl font-light">{month}</span>
                                        <br />
                                        <span className="text-4xl font-bold">{day}</span>
                                    </div>
                                </div>

                                {/* Bottom gray placeholder section */}
                                <div className="bg-gray-200 h-32 w-full" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Calendar;