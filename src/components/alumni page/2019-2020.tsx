import { Plus } from "lucide-react";
import sunny from "../../assets/alumni/2019-2020/Sunny.png";
import glen from "../../assets/alumni/2019-2020/Glen.png";
import aryan from "../../assets/alumni/2019-2020/Aryan.png";
import brian from "../../assets/alumni/2019-2020/Brian.png";
import vishal from "../../assets/alumni/2019-2020/Vishal.png";
import sajin from "../../assets/alumni/2019-2020/Sajin.png";
import zuhayr from "../../assets/alumni/2019-2020/Zuhayr.png";
import sonya from "../../assets/alumni/2019-2020/Sonya.png";
import james from "../../assets/alumni/2019-2020/James.png";
import areeb from "../../assets/alumni/2019-2020/Areeb.png";

const Nineteen = () => {
    const teamMembers = [
        { id: 1, name: "Sunny Wang", position: "President", image: sunny },
        { id: 2, name: "Glen Herbert", position: "VP Projects", image: glen },
        { id: 3, name: "Aryan Paliwal", position: "VP Finance", image: aryan },
        { id: 4, name: "Brian Chang", position: "VP Operations", image: brian },
        { id: 5, name: "Vishal Vijay", position: "VP Development", image: vishal },
        { id: 6, name: "Sajin Kowser", position: "VP Development", image: sajin },
        { id: 7, name: "Zuhayr Abbas", position: "VP Careers", image: zuhayr },
        { id: 8, name: "Sonya Zhang", position: "VP Communications", image: sonya },
        { id: 9, name: "James Quinlan", position: "VP Media", image: james },
        { id: 10, name: "Areeb Athar", position: "VP Student Affairs", image: areeb }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    2019-2020
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

export default Nineteen;
