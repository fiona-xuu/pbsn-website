import { Plus } from "lucide-react";
import kunal from "../../assets/alumni/2023-2024/kunal.png";
import christian from "../../assets/alumni/2023-2024/christian.png";
import deepali from "../../assets/alumni/2023-2024/deepali.png";
import alina from "../../assets/alumni/2023-2024/alina.png";
import andrew from "../../assets/alumni/2023-2024/andrew.png";
import wendi from "../../assets/alumni/2023-2024/wendi.png";
import jerry from "../../assets/alumni/2023-2024/jerry.png";
import jasmine from "../../assets/alumni/2023-2024/jasmine.png";
import joanne from "../../assets/alumni/2023-2024/joanne.png";
import renee from "../../assets/alumni/2023-2024/renee.png";
import sandra from "../../assets/alumni/2023-2024/sandra.png";
import amy from "../../assets/alumni/2023-2024/amy.png";

const TwentyThree = () => {
    const teamMembers = [
        { id: 1, name: "Kunalraj Talampally", position: "President", image: kunal },
        { id: 2, name: "Christian Sharda", position: "VP Projects", image: christian },
        { id: 3, name: "Deepali Khandelwal", position: "VP Projects", image: deepali },
        { id: 4, name: "Alina Wang", position: "VP Internal", image: alina },
        { id: 5, name: "Andrew Sun", position: "VP Development", image: andrew },
        { id: 6, name: "Wendi Wang", position: "VP Development", image: wendi },
        { id: 7, name: "Jerry Zhang", position: "VP Careers", image: jerry },
        { id: 8, name: "Jasmine Vuong", position: "VP Marketing", image: jasmine },
        { id: 9, name: "Joanne Shao", position: "VP Marketing", image: joanne },
        { id: 10, name: "Renee Gao", position: "VP Careers", image: renee },
        { id: 11, name: "Sandra Li", position: "VP Student Affairs", image: sandra },
        { id: 12, name: "Amy Guo", position: "VP External Affairs", image: amy },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3 lg:px-4">
                <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
                    2023-2024
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

export default TwentyThree;
