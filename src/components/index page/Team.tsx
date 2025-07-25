import { Plus } from "lucide-react";
import helia from "@/assets/current team/helia.png";
import rory from "@/assets/current team/rory.png";
import olivia from "@/assets/current team/olivia.png";
import feihan from "@/assets/current team/feihan.png";
import aniya from "@/assets/current team/aniya.png";
import joseph from "@/assets/current team/joseph.png";
import joshua from "@/assets/current team/joshua.png";
import fiona from "@/assets/current team/fiona.png";
import vivian from "@/assets/current team/vivian.png";
import ian from "@/assets/current team/ian.png";
import pooji from "@/assets/current team/pooji.png";
import oliver from "@/assets/current team/oliver.png";
import arveen from "@/assets/current team/arveen.png";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Helia Bahasadri", position: "President", photo: helia },
    { id: 2, name: "Rory Wei", position: "VP Projects", photo: rory },
    { id: 3, name: "Olivia Li Ngan Sun", position: "VP Projects", photo: olivia },
    { id: 4, name: "Feihan Yu", position: "VP Finance", photo: feihan },
    { id: 5, name: "Aniya Liu", position: "VP Development", photo: aniya },
    { id: 6, name: "Joseph Luo", position: "VP Development", photo: joseph },
    { id: 7, name: "Joshua Brown", position: "VP Careers", photo: joshua },
    { id: 8, name: "Fiona Xu", position: "VP Marketing", photo: fiona },
    { id: 9, name: "Vivian Song", position: "VP Marketing", photo: vivian },
    { id: 10, name: "Ian Cheong", position: "VP Careers", photo: ian },
    { id: 11, name: "Pooji Adikari", position: "VP Student Affairs", photo: pooji },
    { id: 12, name: "Oliver Bowes", position: "VP Student Affairs", photo: oliver },
    { id: 13, name: "Arveen Kahlon", position: "VP Community", photo: arveen }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 lg:px-4">
        <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
          Our Team
          <span className="flex-1 h-px bg-gray-400 ml-3 mr-10"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all duration-300 cursor-pointer"
            >
              <div className="flex gap-6 h-full items-end">
                {/* Avatar Placeholder */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-2xl group-hover:brightness-90 transition duration-300"
                />

                {/* Member Info + Plus Button aligned to bottom */}
                <div className="flex-1 flex justify-between items-end h-full pb-5 pr-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">
                      {member.position}
                    </p>
                  </div>

                  {/* Plus Icon */}
                  <div
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-900 hover:scale-125 group/button"
                  >
                    <Plus className="w-4 h-4 text-gray-600 transition-colors duration-200 group-hover/button:text-white" />
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

export default Team;
