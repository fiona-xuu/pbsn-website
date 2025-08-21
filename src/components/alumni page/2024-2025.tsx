import { Plus } from "lucide-react";
import yash from "../../assets/alumni/2024-2025/yash.jpg";
import william from "../../assets/alumni/2024-2025/william.jpeg";
import shay from "../../assets/alumni/2024-2025/shay.jpg";
import zoey from "../../assets/alumni/2024-2025/zoey.png";
import meridith from "../../assets/alumni/2024-2025/meridith.jpg";
import silvia from "../../assets/alumni/2024-2025/silvia.jpg";
import ethan from "../../assets/alumni/2024-2025/ethan.jpg";
import jonathan from "../../assets/alumni/2024-2025/jonathan.jpg";
import fionnlagh from "../../assets/alumni/2024-2025/fionnlagh.jpg";
import jessica from "../../assets/alumni/2024-2025/jessica.png";
import paris from "../../assets/alumni/2024-2025/paris.jpg";
import nia from "../../assets/alumni/2024-2025/nia.jpg";
import adia from "../../assets/alumni/2024-2025/adia.jpg";

const TwentyFour = () => {
    const teamMembers = [
        { id: 1, name: "Yash Ghandi", position: "President", image: yash },
        { id: 2, name: "William Jiang", position: "VP Projects", image: william },
        { id: 3, name: "Shay Kothari", position: "VP Projects", image: shay },
        { id: 4, name: "Zoey Hou", position: "VP Finance", image: zoey },
        { id: 5, name: "Meridith Shang", position: "VP Development", image: meridith },
        { id: 6, name: "Silvia Xie", position: "VP Development", image: silvia },
        { id: 7, name: "Ethan Won", position: "VP Careers", image: ethan },
        { id: 8, name: "Jonathan Pan", position: "VP Marketing", image: jonathan },
        { id: 9, name: "Fionnlagh Carter", position: "VP Marketing", image: fionnlagh },
        { id: 10, name: "Jessica Chen", position: "VP Careers", image: jessica },
        { id: 11, name: "Paris Cai", position: "VP Student Affairs", image: paris },
        { id: 12, name: "Nia Shah", position: "VP Student Affairs", image: nia },
        { id: 13, name: "Adia Heyres", position: "VP Community", image: adia }
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

export default TwentyFour;
