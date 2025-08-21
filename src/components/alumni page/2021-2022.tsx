import { Plus } from "lucide-react";
import shajan from "../../assets/alumni/2021-2022/shajan.jpg";
import shareen from "../../assets/alumni/2021-2022/shareen.jpg";
import avi from "../../assets/alumni/2021-2022/avi.jpg";
import lauren from "../../assets/alumni/2021-2022/lauren.jpg";
import angela from "../../assets/alumni/2021-2022/angela.jpg";
import kevin from "../../assets/alumni/2021-2022/kevin.jpg";
import meera from "../../assets/alumni/2021-2022/meera.jpg";
import kelly from "../../assets/alumni/2021-2022/kelly.jpg";
import cindy from "../../assets/alumni/2021-2022/cindy.jpg";
import michael from "../../assets/alumni/2021-2022/michael.jpg";
import miren from "../../assets/alumni/2021-2022/miren.jpg";

const TwentyOne = () => {
    const teamMembers = [
        { id: 1, name: "Shajan Kamalanathan", position: "President", image: shajan },
        { id: 2, name: "Shareen Siddiqui", position: "VP Projects", image: shareen },
        { id: 3, name: "Avi Roy", position: "VP Projects", image: avi },
        { id: 4, name: "Lauren Nunes", position: "VP Internal", image: lauren },
        { id: 5, name: "Angela Pang", position: "VP Development", image: angela },
        { id: 6, name: "Kevin Xie", position: "VP Development", image: kevin },
        { id: 7, name: "Meera Aggarwal", position: "VP Careers", image: meera },
        { id: 8, name: "Kelly Guo", position: "VP Marketing", image: kelly },
        { id: 9, name: "Cindy Zhang", position: "VP Marketing", image: cindy },
        { id: 10, name: "Michael Zhang", position: "VP External Affairs", image: michael },
        { id: 11, name: "Miren Vijay", position: "VP Student Affairs", image: miren }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    2021-2022
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

export default TwentyOne;
