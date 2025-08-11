import React, { useEffect } from "react";

import Header from "@/components/events page/Header";
import Hero from "@/components/events page/Hero";
import Slideshow from "@/components/events page/Slideshow";
import Calendar from "@/components/events page/Calendar";
import PastEvents from "@/components/events page/PastEvents";
import Footer from "@/components/events page/Footer";


const Events = () => {
    useEffect(() => {
        document.title = "Our Events | PBSN";
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
            <Slideshow />
            <Calendar />
            <PastEvents />
            {/* Add more components as needed */}
            <Footer />
        </div>
    );
};

export default Events;

