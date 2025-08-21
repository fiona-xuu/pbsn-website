export type Event = {
    title: string;
    date: string; // ISO format: "2024-09-19"
    location?: string;
    attendees?: string;
    description?: string;
    category?: string;
    image?: string;
    resources?: Array<{
        title: string;
        type: "gallery" | "download" | "external" | "video";
        icon: string;
        link: string;
    }>;
};

export const allEvents: Event[] = [
    // Upcoming Events
    {
        title: "University 101",
        date: "2025-07-23",
        location: "Online Event",
        attendees: "200+ incoming students",
        description: "Learn about university life, first-year courses, residences, and more with the PBSN VP team.",
        category: "Orientation",
        image: "https://images.unsplash.com/photo-1523240794102-9ebd83b74506?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Resume Template", type: "download", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Summer Speed Chats",
        date: "2025-07-18",
        location: "Virtual Platform",
        attendees: "150+ students",
        description: "Network and chat 1-on-1 with second-year students.",
        category: "Networking",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Networking Tips Guide", type: "download", icon: "FileText", link: "#" },
            { title: "Participant List", type: "download", icon: "FileText", link: "#" },
            { title: "Follow-up Templates", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Recording", type: "video", icon: "Video", link: "#" }
        ]
    },
    {
        title: "Summer Dinner",
        date: "2025-08-22",
        location: "Downtown Toronto",
        attendees: "100+ attendees",
        description: "A summer evening of food, networking, and insights with peers and industry guests.",
        category: "Networking",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" },
            { title: "Guest Speaker Slides", type: "download", icon: "Download", link: "#" },
            { title: "Networking Guide", type: "download", icon: "FileText", link: "#" },
            { title: "Restaurant Menu", type: "external", icon: "ExternalLink", link: "#" }
        ]
    },
    {
        title: "Resume Roast & Revise",
        date: "2025-08-26",
        location: "Bahen Centre",
        attendees: "80+ students",
        description: "Get your resume reviewed by industry professionals and learn how to make it stand out.",
        category: "Workshop",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Resume Templates", type: "download", icon: "Download", link: "#" },
            { title: "Workshop Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Recording", type: "video", icon: "Video", link: "#" },
            { title: "Resume Checklist", type: "external", icon: "ExternalLink", link: "#" }
        ]
    },
    {
        title: "Explore Series - Consulting",
        date: "2025-09-11",
        location: "Rotman School of Management",
        attendees: "120+ students",
        description: "Deep dive into the consulting industry with professionals from top firms.",
        category: "Career",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Consulting Case Examples", type: "download", icon: "FileText", link: "#" },
            { title: "Speaker Presentations", type: "download", icon: "Download", link: "#" },
            { title: "Industry Insights", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Explore Series - Finance",
        date: "2025-09-18",
        location: "Rotman School of Management",
        attendees: "130+ students",
        description: "Explore career opportunities in finance with industry experts.",
        category: "Career",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Finance Career Guide", type: "download", icon: "FileText", link: "#" },
            { title: "Speaker Slides", type: "download", icon: "Download", link: "#" },
            { title: "Industry Resources", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Networking Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Annual General Meeting",
        date: "2025-09-19",
        location: "Sidney Smith Hall",
        attendees: "All members",
        description: "Annual meeting to discuss PBSN's achievements and future plans.",
        category: "Meeting",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Meeting Minutes", type: "download", icon: "FileText", link: "#" },
            { title: "Annual Report", type: "download", icon: "Download", link: "#" },
            { title: "Presentation Slides", type: "download", icon: "FileText", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Explore Series - Tech",
        date: "2025-09-25",
        location: "Bahen Centre",
        attendees: "110+ students",
        description: "Discover opportunities in the technology sector with industry leaders.",
        category: "Career",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Tech Career Paths", type: "download", icon: "FileText", link: "#" },
            { title: "Speaker Presentations", type: "download", icon: "Download", link: "#" },
            { title: "Tech Resources", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "2nd Year Consulting Crash Course",
        date: "2025-10-02",
        location: "Rotman School of Management",
        attendees: "90+ students",
        description: "Intensive crash course for second-year students interested in consulting.",
        category: "Workshop",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Case Study Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Workshop Slides", type: "download", icon: "Download", link: "#" },
            { title: "Practice Cases", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Course Recording", type: "video", icon: "Video", link: "#" }
        ]
    },
    {
        title: "Member's Network",
        date: "2025-10-07",
        location: "Hart House",
        attendees: "150+ members",
        description: "Networking event for PBSN members to connect and build relationships.",
        category: "Networking",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Attendee Directory", type: "download", icon: "FileText", link: "#" },
            { title: "Networking Guide", type: "download", icon: "FileText", link: "#" },
            { title: "Follow-up Templates", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Internship Program - Info Session",
        date: "2025-10-12",
        location: "Online Event",
        attendees: "200+ students",
        description: "Learn about internship opportunities and application processes.",
        category: "Career",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Internship Guide", type: "download", icon: "FileText", link: "#" },
            { title: "Application Timeline", type: "download", icon: "Download", link: "#" },
            { title: "Company Listings", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Session Recording", type: "video", icon: "Video", link: "#" }
        ]
    },
    {
        title: "Aspire Case Competition",
        date: "2025-10-18",
        location: "Rotman School of Management",
        attendees: "60+ participants",
        description: "Annual case competition challenging students to solve real business problems.",
        category: "Competition",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Case Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Winning Solutions", type: "download", icon: "Download", link: "#" },
            { title: "Competition Rules", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Career's Panel",
        date: "2025-10-28",
        location: "Sidney Smith Hall",
        attendees: "180+ students",
        description: "Panel discussion with professionals from various industries.",
        category: "Career",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Panel Discussion Notes", type: "download", icon: "FileText", link: "#" },
            { title: "Speaker Bios", type: "download", icon: "Download", link: "#" },
            { title: "Career Resources", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Career's Panel",
        date: "2025-10-29",
        location: "Sidney Smith Hall",
        attendees: "180+ students",
        description: "Panel discussion with professionals from various industries.",
        category: "Career",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Panel Discussion Notes", type: "download", icon: "FileText", link: "#" },
            { title: "Speaker Bios", type: "download", icon: "Download", link: "#" },
            { title: "Career Resources", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Marketing Case Competition",
        date: "2025-11-16",
        location: "Rotman School of Management",
        attendees: "70+ participants",
        description: "Marketing-focused case competition for creative problem solvers.",
        category: "Competition",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Marketing Case Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Creative Solutions", type: "download", icon: "Download", link: "#" },
            { title: "Marketing Resources", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Competition Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Catalyze Case Competition",
        date: "2025-11-29",
        location: "Bahen Centre",
        attendees: "80+ participants",
        description: "Innovation-focused case competition for entrepreneurial minds.",
        category: "Competition",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Innovation Case Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Winning Innovations", type: "download", icon: "Download", link: "#" },
            { title: "Entrepreneurship Resources", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Member's Network Reconnect",
        date: "2026-01-12",
        location: "Hart House",
        attendees: "120+ members",
        description: "Reconnect with fellow members after the winter break.",
        category: "Networking",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Member Directory", type: "download", icon: "FileText", link: "#" },
            { title: "Reconnection Guide", type: "download", icon: "FileText", link: "#" },
            { title: "Networking Tips", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Woman In Business Case Competition",
        date: "2026-01-17",
        location: "Rotman School of Management",
        attendees: "50+ participants",
        description: "Case competition celebrating women in business and leadership.",
        category: "Competition",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Case Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Leadership Insights", type: "download", icon: "Download", link: "#" },
            { title: "Women in Business Resources", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Competition Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Firm's Trip",
        date: "2026-01-23",
        location: "Various Locations",
        attendees: "40+ students",
        description: "Visit top firms and learn about their culture and opportunities.",
        category: "Career",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Firm Information Packets", type: "download", icon: "FileText", link: "#" },
            { title: "Trip Itinerary", type: "download", icon: "Download", link: "#" },
            { title: "Company Websites", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Trip Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Interview Case Competition",
        date: "2026-01-31",
        location: "Bahen Centre",
        attendees: "60+ participants",
        description: "Practice case interviews with real scenarios and feedback.",
        category: "Competition",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Case Interview Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Practice Cases", type: "download", icon: "Download", link: "#" },
            { title: "Interview Tips", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Event Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Stock Pitch Competition",
        date: "2026-03-01",
        location: "Rotman School of Management",
        attendees: "45+ participants",
        description: "Financial analysis competition for aspiring investment professionals.",
        category: "Competition",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Stock Analysis Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Winning Pitches", type: "download", icon: "Download", link: "#" },
            { title: "Financial Resources", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Competition Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Connect Conference",
        date: "2026-03-07",
        location: "Metro Toronto Convention Centre",
        attendees: "300+ attendees",
        description: "Annual conference bringing together students, professionals, and industry leaders.",
        category: "Conference",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Conference Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Speaker Presentations", type: "download", icon: "Download", link: "#" },
            { title: "Conference Website", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Conference Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    },
    {
        title: "Connect Conference",
        date: "2026-03-08",
        location: "Metro Toronto Convention Centre",
        attendees: "300+ attendees",
        description: "Annual conference bringing together students, professionals, and industry leaders.",
        category: "Conference",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        resources: [
            { title: "Conference Materials", type: "download", icon: "FileText", link: "#" },
            { title: "Speaker Presentations", type: "download", icon: "Download", link: "#" },
            { title: "Conference Website", type: "external", icon: "ExternalLink", link: "#" },
            { title: "Conference Photos", type: "gallery", icon: "FileText", link: "#" }
        ]
    }
];

// Helper function to get upcoming events
export const getUpcomingEvents = (limit: number = 6) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return allEvents
        .filter(event => {
            const [year, month, day] = event.date.split('-').map(Number);
            const eventDate = new Date(year, month - 1, day);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate >= today;
        })
        .sort((a, b) => {
            const [yearA, monthA, dayA] = a.date.split('-').map(Number);
            const [yearB, monthB, dayB] = b.date.split('-').map(Number);
            const dateA = new Date(yearA, monthA - 1, dayA);
            const dateB = new Date(yearB, monthB - 1, dayB);
            return dateA.getTime() - dateB.getTime();
        })
        .slice(0, limit);
};

// Helper function to get past events
export const getPastEvents = (limit?: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const pastEvents = allEvents
        .filter(event => {
            const [year, month, day] = event.date.split('-').map(Number);
            const eventDate = new Date(year, month - 1, day);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate < today;
        })
        .sort((a, b) => {
            const [yearA, monthA, dayA] = a.date.split('-').map(Number);
            const [yearB, monthB, dayB] = b.date.split('-').map(Number);
            const dateA = new Date(yearA, monthA - 1, dayA);
            const dateB = new Date(yearB, monthB - 1, dayB);
            return dateB.getTime() - dateA.getTime(); // Most recent first
        });

    return limit ? pastEvents.slice(0, limit) : pastEvents;
};
