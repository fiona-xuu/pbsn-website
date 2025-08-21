import { Plus } from "lucide-react";
import danilla from "../../assets/alumni/2018-2019/Danilla.png";
import dea from "../../assets/alumni/2018-2019/Dea.png";
import jackson from "../../assets/alumni/2018-2019/Jackson.png";
import eileen from "../../assets/alumni/2018-2019/Eileen.png";
import bijan from "../../assets/alumni/2018-2019/Bijan.png";
import bradley from "../../assets/alumni/2018-2019/Bradley.png";
import bhapushon from "../../assets/alumni/2018-2019/Bhapushon.png";

const Eighteen = () => {
    const teamMembers = [
        { id: 1, name: "Danilla Xing", position: "President", image: danilla },
        { id: 2, name: "Dea Singh", position: "VP Operations", image: dea },
        { id: 3, name: "Jackson Root", position: "VP Finance", image: jackson },
        { id: 4, name: "Eileen Jiao", position: "VP Student Affairs", image: eileen },
        { id: 5, name: "Bijan Mirshashi", position: "VP Development", image: bijan },
        { id: 6, name: "Bradley Perez", position: "VP Development", image: bradley },
        { id: 8, name: "Bhapushon Thayalan", position: "VP Marketing", image: bhapushon }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    2018-2019
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

export default Eighteen;
