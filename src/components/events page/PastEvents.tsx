import React, { useState } from "react";
import { Calendar, MapPin, Users, ExternalLink, FileText, Video, Download } from "lucide-react";
import { getPastEvents, type Event } from "./eventsData";

const getCategoryColor = (category: string) => {
    switch (category) {
        case "Networking":
            return "bg-blue-100 text-blue-800";
        case "Competition":
            return "bg-purple-100 text-purple-800";
        case "Career":
            return "bg-green-100 text-green-800";
        case "Workshop":
            return "bg-orange-100 text-orange-800";
        case "Gala":
            return "bg-pink-100 text-pink-800";
        case "Orientation":
            return "bg-indigo-100 text-indigo-800";
        case "Meeting":
            return "bg-gray-100 text-gray-800";
        case "Conference":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};

// Function to get icon component based on icon name
const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case "FileText":
            return <FileText className="w-4 h-4" />;
        case "Download":
            return <Download className="w-4 h-4" />;
        case "ExternalLink":
            return <ExternalLink className="w-4 h-4" />;
        case "Video":
            return <Video className="w-4 h-4" />;
        default:
            return <FileText className="w-4 h-4" />;
    }
};

const PastEvents = () => {
    const [displayLimit, setDisplayLimit] = useState(6);
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
    const pastEvents = getPastEvents();

    const displayedEvents = pastEvents.slice(0, displayLimit);
    const hasMoreEvents = pastEvents.length > displayLimit;

    const loadMore = () => {
        setDisplayLimit(prev => prev + 6);
    };

    const toggleCard = (index: number) => {
        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Past Events
                    </h2>
                    <p className="text-xl text-gray-600 font-light tracking-wider max-w-3xl mx-auto">
                        Relive the memories and achievements from our previous events.
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedEvents.map((event, index) => {
                        const isFlipped = flippedCards.has(index);
                        const resources = event.resources || [];

                        return (
                            <div
                                key={index}
                                className="relative h-96 perspective-1000"
                            >
                                {/* Card Container with Flip Animation */}
                                <div
                                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''
                                        }`}
                                >
                                    {/* Front of Card */}
                                    <div className="absolute inset-0 w-full h-full backface-hidden">
                                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full">
                                            {/* Event Image */}
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={event.image}
                                                    alt={event.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-20" />
                                            </div>

                                            {/* Event Content */}
                                            <div className="p-6 flex flex-col h-48">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2a2f64] transition-colors duration-300">
                                                    {event.title}
                                                </h3>

                                                <p className="text-gray-600 mb-3 line-clamp-3 flex-grow">
                                                    {event.description}
                                                </p>

                                                {/* View Resources Button */}
                                                <button
                                                    onClick={() => toggleCard(index)}
                                                    className="w-full bg-gray-100 hover:bg-[#06162c] hover:text-white text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-300 group-hover:shadow-md"
                                                >
                                                    View Resources
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back of Card */}
                                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                                        <div className="bg-[#2a2f64] rounded-xl shadow-lg overflow-hidden h-full flex flex-col min-w-0">
                                            {/* Back Header */}
                                            <div className="bg-[#06162c] py-6 p-8 flex-shrink-0">
                                                <h3 className="text-white text-xl font-semibold mb-1 truncate">
                                                    {event.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm font-light">
                                                    Event Resources
                                                </p>
                                            </div>

                                            {/* Resources List - Takes remaining space */}
                                            <div className="flex-1 p-6 overflow-y-auto min-w-0">
                                                <div className="space-y-3">
                                                    {resources.length > 0 ? (
                                                        resources.map((resource, resourceIndex) => (
                                                            <a
                                                                key={resourceIndex}
                                                                href={resource.link}
                                                                className="flex items-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 group min-w-0"
                                                            >
                                                                <div className="text-white mr-3 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                                                    {getIconComponent(resource.icon)}
                                                                </div>
                                                                <span className="text-white font-medium truncate min-w-0">
                                                                    {resource.title}
                                                                </span>
                                                            </a>
                                                        ))
                                                    ) : (
                                                        <div className="text-center py-4">
                                                            <p className="text-gray-300 text-sm">
                                                                No resources available for this event.
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Back Button - Always at bottom */}
                                            <div className="p-6 pt-0 flex-shrink-0">
                                                <button
                                                    onClick={() => toggleCard(index)}
                                                    className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                                                >
                                                    Back to Event
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Past Events Message */}
                {pastEvents.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            No past events to display at the moment. Check back soon for updates!
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PastEvents;
