import { useEffect, useRef, useState } from "react";
import sponsorsImage from "../../assets/sponsors.png";

const Sponsors = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-7xl flex items-center justify-center">
                <div className={`flex ${isVisible ? 'animate-scroll' : ''}`}>
                    <img
                        src={sponsorsImage}
                        alt="Past sponsors logos"
                        className="max-w-none h-32 lg:h-48 mr-8"
                    />
                    <img
                        src={sponsorsImage}
                        alt="Past sponsors logos"
                        className="max-w-none h-32 lg:h-48 mr-8"
                    />
                    <img
                        src={sponsorsImage}
                        alt="Past sponsors logos"
                        className="max-w-none h-32 lg:h-48 mr-8"
                    />
                    <img
                        src={sponsorsImage}
                        alt="Past sponsors logos"
                        className="max-w-none h-32 lg:h-48 mr-8"
                    />
                    <img
                        src={sponsorsImage}
                        alt="Past sponsors logos"
                        className="max-w-none h-32 lg:h-48 mr-8"
                    />
                    <img
                        src={sponsorsImage}
                        alt="Past sponsors logos"
                        className="max-w-none h-32 lg:h-48"
                    />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;