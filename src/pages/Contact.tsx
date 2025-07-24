import React, { useEffect } from "react";

import Header from "@/components/contact page/Header";
import Hero from "@/components/contact page/Hero";
import Form from "@/components/contact page/Form";
import Footer from "@/components/contact page/Footer";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us | PBSN";
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
            <Form />
            {/* Add more components as needed */}
            <Footer />
        </div>
    );
};

export default Contact;