import { Plus } from "lucide-react";

const TwentyFour = () => {
    const teamMembers = [
        { id: 1, name: "Yash Ghandi", position: "President", linkedin: "https://www.linkedin.com/in/yash-ghandi/" },
        { id: 2, name: "William Jiang", position: "VP Projects", linkedin: "https://www.linkedin.com/in/wzj-0111/" },
        { id: 3, name: "Shay Kothari", position: "VP Projects", linkedin: "https://www.linkedin.com/in/shaykothari/" },
        { id: 4, name: "Zoey Hou", position: "VP Finance", linkedin: "https://www.linkedin.com/in/zoey-hou-169b7325a/" },
        { id: 5, name: "Meridith Shang", position: "VP Development", linkedin: "https://www.linkedin.com/in/meridith-shang/" },
        { id: 6, name: "Silvia Xie", position: "VP Development", linkedin: "https://www.linkedin.com/in/silvia-xie-0011/" },
        { id: 7, name: "Ethan Won", position: "VP Careers", linkedin: "https://www.linkedin.com/in/ethanwon/" },
        { id: 8, name: "Jonathan Pan", position: "VP Marketing", linkedin: "https://www.linkedin.com/in/jonathan-pan-531698247/" },
        { id: 9, name: "Fionnlagh Carter", position: "VP Marketing", linkedin: "https://www.linkedin.com/in/fionnlagh-carter/" },
        { id: 10, name: "Jessica Chen", position: "VP Careers", linkedin: "https://www.linkedin.com/in/jessicachen25/" },
        { id: 11, name: "Paris Cai", position: "VP Student Affairs", linkedin: "https://www.linkedin.com/in/pariscai/" },
        { id: 12, name: "Nia Shah", position: "VP Student Affairs", linkedin: "https://www.linkedin.com/in/nia-shah-7b5366259/" },
        { id: 13, name: "Adia Heyres", position: "VP Community", linkedin: "https://www.linkedin.com/in/adia-heyres/" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    2024-2025
                    <span className="flex-1 h-px bg-gray-400 ml-3 mr-10"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex gap-6 h-full items-end">
                                {/* Avatar Placeholder */}
                                <div className="w-40 h-40 bg-gray-300 rounded-2xl group-hover:bg-gray-400 transition-colors duration-300"></div>

                                {/* Member Info + LinkedIn Button aligned to bottom */}
                                <div className="flex-1 flex justify-between items-end h-full pb-5 pr-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-lg mb-0.5">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-1">
                                            {member.position}
                                        </p>
                                    </div>

                                    {/* LinkedIn Icon */}
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-125 group/button cursor-pointer"
                                        aria-label={`View ${member.name}'s LinkedIn profile`}
                                    >
                                        <svg
                                            className="w-5 h-5 text-[#06162c]/70 transition-colors duration-200 group-hover/button:text-[#06162c]"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TwentyFour;
