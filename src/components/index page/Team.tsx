import { Linkedin } from "lucide-react";
import { useState } from "react";
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
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const teamMembers = [
    {
      id: 1,
      name: "Helia Bahasadri",
      position: "President",
      photo: helia,
      linkedin: "https://www.linkedin.com/in/heliabahasadri/",
      description: "is studying Political Science and SASAH. Previously, she was a Director of Community."
    },
    {
      id: 2,
      name: "Joshua Brown",
      position: "VP Careers",
      photo: joshua,
      linkedin: "https://www.linkedin.com/in/joshuabrown0/",
      description: "is studying Global Economics. Previously, he was a Director of Student Affairs."
    },
    {
      id: 3,
      name: "Ian Cheong",
      position: "VP Careers",
      photo: ian,
      linkedin: "https://www.linkedin.com/in/ianch9/",
      description: "is studying Business Management and Organizational Studies. Previously, he was a Director of Careers."
    },
    {
      id: 4,
      name: "Arveen Kahlon",
      position: "VP Community",
      photo: arveen,
      linkedin: "https://www.linkedin.com/in/arveen-kahlon-63b013253/",
      description: "is studying Business Management and Organizational Studies. Previously, she was a Director of Community."
    },
    {
      id: 5,
      name: "Aniya Liu",
      position: "VP Development",
      photo: aniya,
      linkedin: "https://www.linkedin.com/in/aniyaliu/",
      description: "is studying Business Management and Organizational Studies. Previously, she was a Director of Development."
    },
    {
      id: 6,
      name: "Joseph Luo",
      position: "VP Development",
      photo: joseph,
      linkedin: "https://www.linkedin.com/in/luojoseph/",
      description: "is studying Computer Science. Previously, he was a Director of Development."
    },
    {
      id: 7,
      name: "Feihan Yu",
      position: "VP Finance",
      photo: feihan,
      linkedin: "https://www.linkedin.com/in/feihan-yu-91735b209/",
      description: "is studying Computer Science. Previously, she was a Director of Finance."
    },
    {
      id: 8,
      name: "Fiona Xu",
      position: "VP Marketing",
      photo: fiona,
      linkedin: "https://www.linkedin.com/in/fiona-xu06/",
      description: "is studying Computer Science. Previously, she was a Director of Marketing."
    },
    {
      id: 9,
      name: "Vivian Song",
      position: "VP Marketing",
      photo: vivian,
      linkedin: "https://www.linkedin.com/in/vivianysong/",
      description: "is studying International Relations. Previously, she was a Director of Marketing."
    },
    {
      id: 10,
      name: "Rory Wei",
      position: "VP Projects",
      photo: rory,
      linkedin: "https://www.linkedin.com/in/rorywei/",
      description: "is studying Chemistry. Previously, she was a Director of Projects."
    },
    {
      id: 11,
      name: "Olivia Li Ngan Sun",
      position: "VP Projects",
      photo: olivia,
      linkedin: "https://www.linkedin.com/in/olivia-li-ngan-sun-927037203/",
      description: "is studying Health Sciences. Previously, she was a Director of Student Affairs."
    },
    {
      id: 12,
      name: "Pooji Adikari",
      position: "VP Student Affairs",
      photo: pooji,
      linkedin: "https://www.linkedin.com/in/poojiadikari/",
      description: "is studying Global Economics. Previously, she was a Director of Student Affairs."
    },
    {
      id: 13,
      name: "Oliver Bowes",
      position: "VP Student Affairs",
      photo: oliver,
      linkedin: "https://www.linkedin.com/in/oliverbowes/",
      description: "is studying Politics, Philosophy, and Economics. Previously, he was a Director of Finance."
    },
  ];

  const handleCardClick = (memberId: number) => {
    setFlippedCards(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleMouseLeave = (memberId: number) => {
    // Only flip back if the card is currently flipped
    if (flippedCards.includes(memberId)) {
      setFlippedCards(prev => prev.filter(id => id !== memberId));
    }
  };

  const isFlipped = (memberId: number) => flippedCards.includes(memberId);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto  mb-10 px-3 lg:px-4">
        <h2 className="text-5xl font-bold text-gray-900 pl-12 mb-12 flex items-center gap-6">
          Our Team
          <span className="flex-1 h-px bg-gray-400 ml-3 mr-10"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative cursor-pointer"
              style={{ perspective: '1000px', height: '160px' }}
              onClick={() => handleCardClick(member.id)}
              onMouseLeave={() => handleMouseLeave(member.id)}
            >
              {/* Flip Container */}
              <div
                className={`relative w-full h-full transition-transform duration-500`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped(member.id) ? 'rotateX(180deg)' : 'rotateX(0deg)'
                }}
              >
                {/* Front Face */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all duration-300 h-full">
                    <div className="flex gap-6 h-full items-end">
                      {/* Avatar Placeholder */}
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-40 h-40 object-cover rounded-2xl group-hover:brightness-90 transition duration-300"
                      />

                      {/* Member Info + LinkedIn Button aligned to bottom */}
                      <div className="flex-1 flex justify-between items-end h-full pb-5 pr-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg mb-0.5">
                            {member.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-1">
                            {member.position}
                          </p>
                        </div>

                        {/* LinkedIn Icon */}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-125 group/button cursor-pointer"
                          aria-label={`View ${member.name}'s LinkedIn profile`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-5 h-5 text-[#06162c]/70 transition-colors duration-200 group-hover/button:text-[#06162c]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateX(180deg)'
                  }}
                >
                  <div className="bg-gray-100 rounded-2xl h-full p-8 px-10 flex flex-col justify-center">
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
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
