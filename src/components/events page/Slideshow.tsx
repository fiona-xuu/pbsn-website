import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        title: "Connect Conference",
        description: "Description",
    },
    {
        title: "Case Competition",
        description: "Description",
    },
    {
        title: "Networking Night",
        description: "Description",
    },
];

const Slideshow = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full flex justify-center items-center gap-8 py-8">
            {/* Left Arrow */}
            <div
                className="flex-1 flex justify-end"
            >
                <button
                    onClick={prevSlide}
                    className="bg-gray-200 w-72 h-72 rounded-none flex items-center justify-center text-4xl text-gray-400 hover:bg-gray-300 transition"
                    aria-label="Previous"
                >
                    <ChevronLeft size={40} />
                </button>
            </div>
            {/* Center Slide */}
            <div className="flex-1 flex justify-center">
                <div className="bg-gray-300 w-96 h-72 flex flex-col justify-end p-8 relative">
                    <div className="absolute inset-0" />
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-2">{slides[current].title}</h2>
                        <p className="text-white text-base">{slides[current].description}</p>
                    </div>
                </div>
            </div>
            {/* Right Arrow */}
            <div
                className="flex-1 flex justify-start"
            >
                <button
                    onClick={nextSlide}
                    className="bg-gray-200 w-72 h-72 rounded-none flex items-center justify-center text-4xl text-gray-400 hover:bg-gray-300 transition"
                    aria-label="Next"
                >
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
};

export default Slideshow;