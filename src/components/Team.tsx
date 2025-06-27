
import { Plus } from "lucide-react";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Sarah Johnson", position: "President" },
    { id: 2, name: "Michael Chen", position: "Vice President" },
    { id: 3, name: "Emily Davis", position: "Secretary" },
    { id: 4, name: "James Wilson", position: "Treasurer" },
    { id: 5, name: "Amanda Brown", position: "Events Director" },
    { id: 6, name: "David Martinez", position: "Marketing Director" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-gray-100 rounded-2xl p-8 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 bg-gray-300 rounded-2xl mb-6 group-hover:bg-gray-400 transition-colors duration-300"></div>
              
              {/* Member Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {member.position}
                  </p>
                </div>
                
                {/* Plus Icon */}
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                  <Plus className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
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
