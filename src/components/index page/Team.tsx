import { Linkedin } from "lucide-react";
import { useState } from "react";
import surya from "@/assets/current team/surya.JPG";
import shirley from "@/assets/current team/shirley.JPG";
import evan from "@/assets/current team/evan.JPG";
import eric from "@/assets/current team/eric.png";
import kaelyn from "@/assets/current team/kaelyn.JPG";
import justin from "@/assets/current team/justin.JPG";
import tamara from "@/assets/current team/tamara.jpeg";
import keira from "@/assets/current team/keira.JPG";
import amelie from "@/assets/current team/amelie.JPG";
import owen from "@/assets/current team/owen.jpg";
import jason from "@/assets/current team/jason.JPG";
import grace from "@/assets/current team/grace.JPG";
import roshni from "@/assets/current team/roshni.jpeg";

// Chest-up crop applied to full-body headshots. The shared default frames most
// photos well; the ones below are shot from a different distance/height and need
// an individually tuned anchor (higher Y% raises the face) and zoom (scale).
// Owen's photo is already framed tightly, so it gets no zoom.
const defaultCrop = "object-[50%_35%] origin-[50%_35%] scale-[1.7]";
const cropOverrides: Record<string, string> = {
  "Owen Caruana": "",
  "Roshni Pandey": "object-[50%_30%] origin-[50%_30%] scale-[1.7]",
  "Kaelyn Bridge": "object-[50%_30%] origin-[50%_30%] scale-[1.7]",
  "Eric Zhang": "object-[50%_35%] origin-[50%_35%] scale-[1.4]",
  "Amelie Hu": "object-[50%_28%] origin-[50%_28%] scale-[1.6]",
  "Justin W. Chen": "object-[50%_40%] origin-[50%_40%] scale-[1.7]",
  "Shirley Pan": "object-[50%_45%] origin-[50%_45%] scale-[1.8]",
  "Evan Stevenson": "object-[50%_42%] origin-[50%_42%] scale-[2.1]",
  "Grace Tan": "object-[50%_22%] origin-[50%_22%] scale-[1.8]",
};

const Team = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const teamMembers = [
    {
      id: 1,
      name: "Surya Rooplal",
      position: "President",
      photo: surya,
      linkedin: "https://www.linkedin.com/in/surya-rooplal-9b8494309/",
      description: "is studying Political Science. Previously, she was a Director of Student Affairs."
    },
    {
      id: 2,
      name: "Tamara Mujahed",
      position: "VP Careers",
      photo: tamara,
      linkedin: "https://www.linkedin.com/in/tamara-mujahed/",
      description: "is studying Business Management and Organizational Studies. Previously, she was a Director of Careers."
    },
    {
      id: 3,
      name: "Owen Caruana",
      position: "VP Careers",
      photo: owen,
      linkedin: "https://www.linkedin.com/in/owen-caruana/",
      description: "is studying Business Management and Organizational Studies."
    },
    {
      id: 4,
      name: "Roshni Pandey",
      position: "VP Community",
      photo: roshni,
      linkedin: "https://www.linkedin.com/in/roshni-pandey-7a5499288/",
      description: "is studying Political Science. Previously, she was a Director of Community."
    },
    {
      id: 5,
      name: "Kaelyn Bridge",
      position: "VP Development",
      photo: kaelyn,
      linkedin: "https://www.linkedin.com/in/kaelynbridge42007/",
      description: "is studying Engineering. Previously, she was a Director of Development."
    },
    {
      id: 6,
      name: "Justin W. Chen",
      position: "VP Development",
      photo: justin,
      linkedin: "https://www.linkedin.com/in/justin-w-chen-2b03b4212/",
      description: "is studying International Relations. Previously, he was a Director of Projects."
    },
    {
      id: 7,
      name: "Eric Zhang",
      position: "VP Finance",
      photo: eric,
      linkedin: "https://www.linkedin.com/in/ericzhang0105/",
      description: "is studying Business Management and Organizational Studies. Previously, he was a Director of Finance."
    },
    {
      id: 8,
      name: "Keira Wen",
      position: "VP Marketing",
      photo: keira,
      linkedin: "https://www.linkedin.com/in/keirawen/",
      description: "is studying Business Management and Organizational Studies. Previously, she was a Director of Marketing."
    },
    {
      id: 9,
      name: "Amelie Hu",
      position: "VP Marketing",
      photo: amelie,
      linkedin: "https://www.linkedin.com/in/amelie-hu/",
      description: "is studying Health Sciences. Previously, she was a Director of Marketing."
    },
    {
      id: 10,
      name: "Shirley Pan",
      position: "VP Projects",
      photo: shirley,
      linkedin: "https://www.linkedin.com/in/shirleyjxp/",
      description: "is studying Health Sciences. Previously, she was a Director of Projects."
    },
    {
      id: 11,
      name: "Evan Stevenson",
      position: "VP Projects",
      photo: evan,
      linkedin: "https://www.linkedin.com/in/evan-stevenson-33b134374/",
      description: "is studying Business Management and Organizational Studies. Previously, he was a Director of Projects."
    },
    {
      id: 12,
      name: "Jason Huang",
      position: "VP Student Affairs",
      photo: jason,
      linkedin: "https://www.linkedin.com/in/jasonhuang07/",
      description: "is studying Computer Science. Previously, he was a Director of Student Affairs."
    },
    {
      id: 13,
      name: "Grace Tan",
      position: "VP Student Affairs",
      photo: grace,
      linkedin: "https://www.linkedin.com/in/gracemtan/",
      description: "is studying French Studies. Previously, she was a Director of Development."
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
                      <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className={`w-full h-full object-cover group-hover:brightness-90 transition duration-300 ${
                            member.name in cropOverrides ? cropOverrides[member.name] : defaultCrop
                          }`}
                        />
                      </div>

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
