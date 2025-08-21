import { Plus } from "lucide-react";
import zach from "../../assets/alumni/2013-2014/Zach.png";
import manpreet from "../../assets/alumni/2013-2014/Manpreet.png";
import james from "../../assets/alumni/2013-2014/James.png";
import jamie from "../../assets/alumni/2013-2014/Jamie.png";
import alex from "../../assets/alumni/2013-2014/Alex.png";
import bianca from "../../assets/alumni/2013-2014/Bianca.png";

const Thirteen = () => {
    const teamMembers = [
        { id: 1, name: "Zach Hamel", position: "President", image: zach },
        { id: 2, name: "Manpreet Toor", position: "VP Development", image: manpreet },
        { id: 3, name: "James Serena", position: "VP Careers", image: james },
        { id: 4, name: "Jamie Cruickshank", position: "VP Technology", image: jamie },
        { id: 5, name: "Alex Luu", position: "VP Operations", image: alex },
        { id: 6, name: "Bianca Braganza", position: "VP Student Affairs", image: bianca }
    ];

    return (
        <section className="py-16 pb-32 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    2013-2014
                    <span className="flex-1 h-px bg-gray-400 ml-3 mr-10"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex gap-6 h-full items-end">
                                {/* Member Avatar */}
                                <img
                                    src={member.image}
                                    alt={`${member.name} - ${member.position}`}
                                    className="w-40 h-40 object-cover rounded-2xl group-hover:opacity-90 transition-opacity duration-300"
                                />

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

export default Thirteen;
