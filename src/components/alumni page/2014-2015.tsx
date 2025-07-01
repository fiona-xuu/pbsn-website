import { Plus } from "lucide-react";

const Fourteen = () => {
    const teamMembers = [
        { id: 1, name: "Carolyn Tang", position: "President" },
        { id: 2, name: "Verdant Suri", position: "VP Projects" },
        { id: 3, name: "Rachael Dimenna", position: "VP Operations" },
        { id: 4, name: "Jason Newsted", position: "VP Finance" },
        { id: 5, name: "Andrew Shon", position: "VP Development" },
        { id: 6, name: "Samantha Wu", position: "VP Careers" },
        { id: 7, name: "Jeet Charkrabarty", position: "VP Technology" },
        { id: 8, name: "Ayush Vaidya", position: "VP Media" },
        { id: 9, name: "Srijamya Raghuvanshi", position: "VP Student Affairs" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    2014-2015
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

                                {/* Member Info + Plus Button aligned to bottom */}
                                <div className="flex-1 flex justify-between items-end h-full pb-5 pr-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-lg mb-0.5">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-1">
                                            {member.position}
                                        </p>
                                    </div>

                                    {/* Plus Icon */}
                                    <div
                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-900 hover:scale-125 group/button"
                                    >
                                        <Plus className="w-4 h-4 text-gray-600 transition-colors duration-200 group-hover/button:text-white" />
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

export default Fourteen;
