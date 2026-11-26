import { Plus } from "lucide-react";
import helia from "../../assets/alumni/2025-2026/helia.png";
import rory from "../../assets/alumni/2025-2026/rory.png";
import olivia from "../../assets/alumni/2025-2026/olivia.png";
import feihan from "../../assets/alumni/2025-2026/feihan.png";
import aniya from "../../assets/alumni/2025-2026/aniya.png";
import joseph from "../../assets/alumni/2025-2026/joseph.png";
import joshua from "../../assets/alumni/2025-2026/joshua.png";
import fiona from "../../assets/alumni/2025-2026/fiona.png";
import vivian from "../../assets/alumni/2025-2026/vivian.png";
import ian from "../../assets/alumni/2025-2026/ian.png";
import pooji from "../../assets/alumni/2025-2026/pooji.png";
import oliver from "../../assets/alumni/2025-2026/oliver.png";
import arveen from "../../assets/alumni/2025-2026/arveen.png";

const TwentyFive = () => {
    const teamMembers = [
        { id: 1, name: "Helia Bahasadri", position: "President", image: helia },
        { id: 2, name: "Olivia Li Ngan Sun", position: "VP Projects", image: olivia },
        { id: 3, name: "Rory Wei", position: "VP Projects", image: rory },
        { id: 4, name: "Feihan Yu", position: "VP Finance", image: feihan },
        { id: 5, name: "Joseph Luo", position: "VP Development", image: joseph },
        { id: 6, name: "Aniya Liu", position: "VP Development", image: aniya },
        { id: 7, name: "Joshua Brown", position: "VP Careers", image: joshua },
        { id: 8, name: "Fiona Xu", position: "VP Marketing", image: fiona },
        { id: 9, name: "Vivian Song", position: "VP Marketing", image: vivian },
        { id: 10, name: "Ian Cheong", position: "VP Careers", image: ian },
        { id: 11, name: "Pooji Adikari", position: "VP Student Affairs", image: pooji },
        { id: 12, name: "Oliver Bowes", position: "VP Student Affairs", image: oliver },
        { id: 13, name: "Arveen Kahlon", position: "VP Community", image: arveen }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 pl-4 md:pl-12 mb-12 flex items-center gap-6">
                    2025-2026
                    <span className="flex-1 h-px bg-gray-400 ml-3 mr-4 md:mr-10"></span>
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
                                <div className="flex-1 flex items-end h-full pb-5 pr-4 min-w-0 [overflow-wrap:anywhere]">
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

export default TwentyFive;