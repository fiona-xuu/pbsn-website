import { getUpcomingEvents } from "./eventsData";

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
    // Get upcoming events from shared data
    const upcoming = getUpcomingEvents(6);

    return (
        <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-4 pb-14">
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