import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

// Import background images
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';

const PhotoAlbum = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // Array of photos for the carousel
    const photos = [
        { src: bg1, alt: 'PBSN Event Photo 1' },
        { src: bg2, alt: 'PBSN Event Photo 2' },
        { src: bg3, alt: 'PBSN Event Photo 3' }
    ];

    const scrollToIndex = (index: number) => {
        if (isAnimating || !containerRef.current) return;

        setIsAnimating(true);
        setCurrentIndex(index);

        const container = containerRef.current;
        const photoWidth = container.offsetWidth / 2; // Each photo takes half the container width
        const gap = 24; // 6 * 4px (gap-6)
        const scrollDistance = index * (photoWidth + gap);

        gsap.to(container, {
            scrollLeft: scrollDistance,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false)
        });
    };

    const scrollLeft = () => {
        const maxIndex = Math.max(0, photos.length - 2);
        const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
        scrollToIndex(newIndex);
    };

    const scrollRight = () => {
        const maxIndex = Math.max(0, photos.length - 2);
        const newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
        scrollToIndex(newIndex);
    };

    // Initialize scroll position on mount
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = 0;
        }
    }, []);

    return (
        <section className="w-full bg-gray-100 pt-16 pb-14 mb-28 flex items-center justify-center">
            <div className="w-full max-w-7xl px-4">
                <div className="flex items-center gap-4">
                    {/* Left Arrow */}
                    <button
                        onClick={scrollLeft}
                        disabled={isAnimating}
                        className="flex-shrink-0 bg-white/80 hover:bg-white hover:scale-110 p-3 rounded-full shadow-lg transition-all duration-200"
                        aria-label="Previous photos"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>

                    {/* Photo Container - Scrollable with GSAP */}
                    <div className="flex-1 flex justify-center">
                        <div
                            ref={containerRef}
                            className="flex gap-5 w-full max-w-5xl overflow-x-auto scrollbar-hide p-4"
                            style={{
                                scrollBehavior: 'auto',
                                scrollbarWidth: 'none', // Firefox
                                msOverflowStyle: 'none' // IE and Edge
                            }} // Disable native smooth scroll
                        >
                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 flex items-center justify-center"
                                    style={{ width: 'calc(50% - 10px)' }} // Half width minus half the gap
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full max-h-[500px] object-contain hover:scale-105 transition-transform duration-300 shadow-md rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={scrollRight}
                        disabled={isAnimating}
                        className="flex-shrink-0 bg-white/80 hover:bg-white hover:scale-110 p-3 rounded-full shadow-lg transition-all duration-200"
                        aria-label="Next photos"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-10 space-x-3">
                    {Array.from({ length: Math.max(1, photos.length - 1) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            disabled={isAnimating}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${currentIndex === index
                                ? 'bg-[#06162c]'
                                : 'bg-gray-400 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to photos ${index + 1} and ${index + 2}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoAlbum;