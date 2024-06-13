import React from "react";
import Card from "./card";
import Text from "./text";

function Awards() {
  return (
    <div>
      <div
        id="awards"
        className="bg-black-900 flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 py-[40px] w-full"
      >
        <div className="flex flex-col gap-5 items-center justify-center max-w-7xl mx-auto sm:px-5 w-full">
          <div className="flex flex-row gap-4 items-center justify-center py-5 w-full">
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
          <div className="flex flex-wrap justify-center w-full">
            <div className="flex items-start justify-start sm:px-5 px-6 py-5">
              <Card
                className="border border-gray-600 border-solid flex flex-col gap-7 items-start justify-start sm:px-5 px-6 py-[30px] tracking-[-0.32px] rounded-[10px] w-full transition-transform duration-500 ease-in-out transform hover:scale-105"
                Title="IX 23 Top 10 Finalist"
                date="Aug 2023"
                description="Lead my team to outshine 150 teams and got placed
              in the top 10 to secure a spot at the grand finale
              which was a 24-hour event. It was a two-phased,
              research-oriented designathon focusing on XR-based
              UI/UX solutions"
                logoSrc="images/trace.svg"
              />
            </div>
            <div className="flex items-start justify-start sm:px-5 px-6 py-5">
              <Card
                className="border border-gray-600 border-solid flex flex-col gap-7 items-start tracking-[-0.32px] justify-start sm:px-5 px-6 py-[30px] rounded-[10px] w-full transition-transform duration-500 ease-in-out transform hover:scale-105"
                Title="Devthon 1.0 - 4th Place"
                date="April 2024"
                description="A thrilling web development competition organized by the Leo Club of University of Moratuwa and University of SLTC. Amongst 150 teams, my team and I secured a remarkable 4th place wth our project EliteBluPrint."
                logoSrc="images/devthon.jpg"
              />
            </div>
            <div className="flex items-start  justify-start sm:px-5 px-6 py-5">
              <Card
                className="border border-gray-600 border-solid flex flex-col gap-7 items-start tracking-[-0.32px] justify-start sm:px-5 px-6 py-[30px] rounded-[10px] w-full transition-transform duration-500 ease-in-out transform hover:scale-105"
                Title="Innovation Nation Sri Lanka 2023"
                date="Jan 2024"
                description="Participated in the Business Ideathon stage of Innovation Nation Srilanka and secured a spot for top 5 in Colombo North Division for project EliteBluPrint."
                logoSrc="images/insl.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
