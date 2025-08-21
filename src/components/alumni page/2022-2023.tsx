import { Plus } from "lucide-react";
import sherry from "../../assets/alumni/2022-2023/sherry.png";
import jane from "../../assets/alumni/2022-2023/jane.png";
import shaun from "../../assets/alumni/2022-2023/shaun.png";
import graceZhou from "../../assets/alumni/2022-2023/grace zhou.png";
import aarushi from "../../assets/alumni/2022-2023/aarushi.png";
import joshua from "../../assets/alumni/2022-2023/joshua.png";
import seetha from "../../assets/alumni/2022-2023/seetha.png";
import shirley from "../../assets/alumni/2022-2023/shirley.png";
import renee from "../../assets/alumni/2022-2023/renee.png";
import graceZhu from "../../assets/alumni/2022-2023/grace zhu.png";
import alec from "../../assets/alumni/2022-2023/alec.png";

const TwentyTwo = () => {
    const teamMembers = [
        { id: 1, name: "Sherry Yang", position: "President", image: sherry },
        { id: 2, name: "Jane Wang", position: "VP Projects", image: jane },
        { id: 3, name: "Shaun Sunil", position: "VP Projects", image: shaun },
        { id: 4, name: "Grace Zhou", position: "VP Internal", image: graceZhou },
        { id: 5, name: "Aarushi Saha", position: "VP Development", image: aarushi },
        { id: 6, name: "Joshua Lakdawala", position: "VP Development", image: joshua },
        { id: 7, name: "Seetha Manoharan", position: "VP Careers", image: seetha },
        { id: 8, name: "Shirley Mu", position: "VP Marketing", image: shirley },
        { id: 9, name: "Renee Wu", position: "VP Marketing", image: renee },
        { id: 10, name: "Grace Zhu", position: "VP External Affairs", image: graceZhu },
        { id: 11, name: "Alec Yang", position: "VP Student Affairs", image: alec }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    2022-2023
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
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={`${member.name} - ${member.position}`}
                                        className="w-40 h-40 object-cover rounded-2xl group-hover:opacity-90 transition-opacity duration-300"
                                    />
                                ) : (
                                    <div className="w-40 h-40 bg-gray-300 rounded-2xl group-hover:bg-gray-400 transition-colors duration-300"></div>
                                )}

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

export default TwentyTwo;
