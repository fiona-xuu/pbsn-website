import { Plus } from "lucide-react";
import logan from "../../assets/alumni/2020-2021/Logan.png";
import maggie from "../../assets/alumni/2020-2021/Maggie.png";
import alex from "../../assets/alumni/2020-2021/Alex.png";
import oliver from "../../assets/alumni/2020-2021/Oliver.png";
import labiba from "../../assets/alumni/2020-2021/Labiba.png";
import anjana from "../../assets/alumni/2020-2021/Anjana.png";
import alina from "../../assets/alumni/2020-2021/Alina.png";
import celina from "../../assets/alumni/2020-2021/Celina.png";
import frank from "../../assets/alumni/2020-2021/Frank.png";
import ali from "../../assets/alumni/2020-2021/Ali.png";
import shankari from "../../assets/alumni/2020-2021/Shankari.png";

const Twenty = () => {
    const teamMembers = [
        { id: 1, name: "Logan Kieller", position: "President", image: logan },
        { id: 2, name: "Maggie Chen", position: "VP Projects", image: maggie },
        { id: 3, name: "Alex Mastromarini", position: "VP Projects", image: alex },
        { id: 4, name: "Oliver Zhou", position: "VP Operations", image: oliver },
        { id: 5, name: "Labiba Islam", position: "VP Development", image: labiba },
        { id: 6, name: "Anjana Somasundaram", position: "VP Development", image: anjana },
        { id: 7, name: "Alina Ramji", position: "VP Careers", image: alina },
        { id: 8, name: "Celina Shen", position: "VP Marketing", image: celina },
        { id: 9, name: "Frank Huang", position: "VP Marketing", image: frank },
        { id: 10, name: "Ali Malik", position: "VP External Affairs", image: ali },
        { id: 11, name: "Shankari Sivanathan", position: "VP Student Affairs", image: shankari }
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

export default Twenty;
