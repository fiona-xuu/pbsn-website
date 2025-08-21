import { Plus } from "lucide-react";

const TwentyFour = () => {
    const teamMembers = [
        { id: 1, name: "Yash Ghandi", position: "President" },
        { id: 2, name: "William Jiang", position: "VP Projects" },
        { id: 3, name: "Shay Kothari", position: "VP Projects" },
        { id: 4, name: "Zoey Hou", position: "VP Finance" },
        { id: 5, name: "Meridith Shang", position: "VP Development" },
        { id: 6, name: "Silvia Xie", position: "VP Development" },
        { id: 7, name: "Ethan Won", position: "VP Careers" },
        { id: 8, name: "Jonathan Pan", position: "VP Marketing" },
        { id: 9, name: "Fionnlagh Carter", position: "VP Marketing" },
        { id: 10, name: "Jessica Chen", position: "VP Careers" },
        { id: 11, name: "Paris Cai", position: "VP Student Affairs" },
        { id: 12, name: "Nia Shah", position: "VP Student Affairs" },
        { id: 13, name: "Adia Heyres", position: "VP Community" }
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

                                {/* Member Info */}
                                <div className="flex-1 flex items-end h-full pb-5 pr-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-lg mb-0.5">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-1">
                                            {member.position}
                                        </p>
                                    </div>
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
