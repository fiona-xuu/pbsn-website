import { Plus } from "lucide-react";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Helia Bahasadri", position: "President" },
    { id: 2, name: "Rory Wei", position: "VP Projects" },
    { id: 3, name: "Olivia Li Ngan Sun", position: "VP Projects" },
    { id: 4, name: "Feihan Yu", position: "VP Finance" },
    { id: 5, name: "Aniya Liu", position: "VP Development" },
    { id: 6, name: "Joseph Luo", position: "VP Development" },
    { id: 7, name: "Joshua Brown", position: "VP Careers" },
    { id: 8, name: "Fiona Xu", position: "VP Marketing" },
    { id: 9, name: "Vivian Song", position: "VP Marketing" },
    { id: 10, name: "Ian Cheong", position: "VP Careers" },
    { id: 11, name: "Pooji Adikari", position: "VP Student Affairs" },
    { id: 12, name: "Oliver Bowes", position: "VP Student Affairs" },
    { id: 13, name: "Arveen Kahlon", position: "VP Community" }
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
                <div className="w-40 h-40 bg-gray-300 rounded-2xl group-hover:bg-gray-400 transition-colors duration-300"></div>

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
