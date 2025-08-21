import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import pic1 from "../../assets/event pics/event1.jpg";
import pic2 from "../../assets/event pics/event2.jpg";
import pic3 from "../../assets/event pics/event3.jpg";

const slides = [
    {
        title: "University 101",
        description: "Learn about university life, first-year courses, residences, and more with the PBSN VP team.",
        image: pic1,
    },
    {
        title: "Summer Speed Chats",
        description: "Network and chat 1-on-1 with second-year students.",
        image: pic2,
    },
    {
        title: "Summer Dinner",
        description: "A summer evening of food, networking, and insights with peers and industry guests.",
        image: pic3,
    },
];

const Slideshow = () => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const leftSlideRef = useRef<HTMLDivElement>(null);
    const centerSlideRef = useRef<HTMLDivElement>(null);
    const rightSlideRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        // Fade out text
        gsap.to(textRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.out"
        });

        // Smooth slide all photos to the right
        gsap.to([leftSlideRef.current, centerSlideRef.current, rightSlideRef.current], {
            x: "100%",
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
                setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
                gsap.set([leftSlideRef.current, centerSlideRef.current, rightSlideRef.current], { x: 0 });
                setIsTransitioning(false);

                // Fade in text
                gsap.to(textRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        // Fade out text
        gsap.to(textRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.out"
        });

        // Smooth slide all photos to the left
        gsap.to([leftSlideRef.current, centerSlideRef.current, rightSlideRef.current], {
            x: "-100%",
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
                setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
                gsap.set([leftSlideRef.current, centerSlideRef.current, rightSlideRef.current], { x: 0 });
                setIsTransitioning(false);

                // Fade in text
                gsap.to(textRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });
    };

    const getPrevIndex = () => (current === 0 ? slides.length - 1 : current - 1);
    const getNextIndex = () => (current === slides.length - 1 ? 0 : current + 1);

    // Initialize text animation on mount
    useEffect(() => {
        if (textRef.current) {
            gsap.set(textRef.current, { opacity: 0, y: 20 });
            gsap.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.2
            });
        }
    }, []);

    return (
        <div className="w-full flex justify-center items-center gap-8 pt-16 pb-8 overflow-hidden">
            {/* Left Arrow - Overlay on Previous Photo */}
            <div className="flex-[0.25] flex justify-end relative">
                <div
                    ref={leftSlideRef}
                    className="w-full h-96 bg-cover bg-center bg-no-repeat relative transition-all duration-500 ease-in-out"
                    style={{ backgroundImage: `url(${slides[getPrevIndex()].image})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300" />
                    <button
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        className="absolute inset-0 w-full h-full flex items-center justify-start pl-28 text-4xl text-white bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={48} className="transition-transform duration-300 hover:scale-125" />
                    </button>
                </div>
            </div>

            {/* Center Slide */}
            <div className="flex-[0.5] flex justify-center overflow-hidden">
                <div
                    ref={centerSlideRef}
                    className="w-[48rem] h-[28rem] flex flex-col justify-end py-8 px-10 relative bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${slides[current].image})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300" />
                    <div ref={textRef} className="relative z-10">
                        <h2 className="text-white text-4xl font-semibold mb-2">{slides[current].title}</h2>
                        <p className="text-white text-lg font-light">{slides[current].description}</p>
                    </div>
                </div>
            </div>

            {/* Right Arrow - Overlay on Next Photo */}
            <div className="flex-[0.25] flex justify-start relative">
                <div
                    ref={rightSlideRef}
                    className="w-full h-96 bg-cover bg-center bg-no-repeat relative transition-all duration-500 ease-in-out"
                    style={{ backgroundImage: `url(${slides[getNextIndex()].image})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300" />
                    <button
                        onClick={nextSlide}
                        disabled={isTransitioning}
                        className="absolute inset-0 w-full h-full flex items-center justify-end pr-28 text-4xl text-white bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next"
                    >
                        <ChevronRight size={48} className="transition-transform duration-300 hover:scale-125" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;