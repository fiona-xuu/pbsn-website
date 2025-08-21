import { Plus } from "lucide-react";

const Twenty = () => {
    const teamMembers = [
        { id: 1, name: "Logan Kieller", position: "President" },
        { id: 2, name: "Maggie Chen", position: "VP Projects" },
        { id: 3, name: "Alex Mastromarini", position: "VP Projects" },
        { id: 4, name: "Oliver Zhou", position: "VP Operations" },
        { id: 5, name: "Labiba Islam", position: "VP Development" },
        { id: 6, name: "Anjana Somasundaram", position: "VP Development" },
        { id: 7, name: "Alina Ramji", position: "VP Careers" },
        { id: 8, name: "Celina Shen", position: "VP Marketing" },
        { id: 9, name: "Frank Huang", position: "VP Marketing" },
        { id: 10, name: "Ali Malik", position: "VP External Affairs" },
        { id: 11, name: "Shankari Sivanathan", position: "VP Student Affairs" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    2020-2021
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

export default Twenty;
