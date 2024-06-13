import React from "react";
import { motion } from "framer-motion";
import Text from "./text";

const awardsData = [
  {
    id: 1,
    title: "IX 23 Top 10 Finalist",
    date: "Aug 2023",
    description:
      "Lead my team to outshine 150 teams and got placed in the top 10 to secure a spot at the grand finale which was a 24-hour event. It was a two-phased, research-oriented designathon focusing on XR-based UI/UX solutions",
    logoSrc: "images/trace.svg",
  },
  {
    id: 2,
    title: "Devthon 1.0 - 4th Place",
    date: "April 2024",
    description:
      "A thrilling web development competition organized by the Leo Club of University of Moratuwa and University of SLTC. Amongst 150 teams, my team and I secured a remarkable 4th place with our project EliteBluPrint.",
    logoSrc: "images/devthon.jpg",
  },
  {
    id: 3,
    title: "Innovation Nation Sri Lanka 2023",
    date: "Jan 2024",
    description:
      "Participated in the Business Ideathon stage of Innovation Nation Sri Lanka and secured a spot for top 5 in Colombo North Division for project EliteBluPrint.",
    logoSrc: "images/insl.svg",
  },
];

const Awards = () => {
  return (
    <div id="awards" className="bg-black-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: Title */}
        <div className="flex flex-row gap-4 items-center justify-center py-5 my-5 w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-auto"
            size="txtSoraRegular48WhiteA700"
          >
            My
          </Text>
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-auto"
            size="txtSoraExtraBold48WhiteA700"
          >
            Awards
          </Text>
        </div>

        {/* Second Row: Awards Grid */}
        <div className="grid sm:grid-cols-1 grid-cols-3 gap-8">
          {awardsData.map((award) => (
            <motion.div
              key={award.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white-A700 rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-4 flex justify-center items-center">
                <img
                  src={award.logoSrc}
                  alt={award.title}
                  className="h-10 w-10 object-contain rounded-full"
                />
              </div>
              <div className="p-6">
                <Text size="txtSoraBold32" className="mb-2 text-black-900">
                  {award.title}
                </Text>
                <Text size="txtSoraRegular16" className="mb-4 text--900">
                  {award.date}
                </Text>
                <p className="text-sm text--900">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
