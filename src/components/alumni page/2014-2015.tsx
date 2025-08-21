import { Plus } from "lucide-react";
import carolyn from "../../assets/alumni/2014-2015/Carolyn.png";
import verdant from "../../assets/alumni/2014-2015/Verdant.png";
import rachael from "../../assets/alumni/2014-2015/Rachael.png";
import jason from "../../assets/alumni/2014-2015/Jason.png";
import andrew from "../../assets/alumni/2014-2015/Andrew.png";
import samantha from "../../assets/alumni/2014-2015/Samantha.png";
import jeet from "../../assets/alumni/2014-2015/Jeet.png";
import ayush from "../../assets/alumni/2014-2015/Ayush.png";
import srijamya from "../../assets/alumni/2014-2015/Srijamya.png";

const Fourteen = () => {
    const teamMembers = [
        { id: 1, name: "Carolyn Tang", position: "President", image: carolyn },
        { id: 2, name: "Verdant Suri", position: "VP Projects", image: verdant },
        { id: 3, name: "Rachael Dimenna", position: "VP Operations", image: rachael },
        { id: 4, name: "Jason Newsted", position: "VP Finance", image: jason },
        { id: 5, name: "Andrew Shon", position: "VP Development", image: andrew },
        { id: 6, name: "Samantha Wu", position: "VP Careers", image: samantha },
        { id: 7, name: "Jeet Charkrabarty", position: "VP Technology", image: jeet },
        { id: 8, name: "Ayush Vaidya", position: "VP Media", image: ayush },
        { id: 9, name: "Srijamya Raghuvanshi", position: "VP Student Affairs", image: srijamya }
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

export default Fourteen;
