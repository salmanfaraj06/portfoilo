import React from "react";
import PortfolioSkills from "./portfolioskills";
import Text from "./text";
import Img from "./img";

function SkillSection() {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center md:px-10 px-20 sm:px-5 py-[80px] w-full"
    >
      <div className="flex flex-col gap-5 items-start justify-start max-w-7xl mx-auto sm:px-5 w-full">
        <div className="flex flex-row gap-4 items-center justify-center py-5 w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
            size="txtSoraRegular48"
          >
            My
          </Text>
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
            size="txtSoraExtraBold48"
          >
            Skills
          </Text>
        </div>

        <div className="md:gap-5 gap-[70px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center min-h-[auto] py-5 w-full">
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/java.png"
            text="Java"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/python.png"
            text="Python"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/javascript.svg"
            text="JavaScript"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/html.png"
            text="HTML"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/figma.svg"
            text="Figma"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/react.svg"
            text="ReactJS"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/node.svg"
            text="NodeJS"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/express.svg"
            text="ExpressJS"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/css.svg"
            text="Tailwind CSS"
          />

          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/mongodb.svg"
            text="Mongo DB"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/trello.png"
            text="Trello"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/css.png"
            text="CSS"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/icon-git.svg"
            text="Git"
          />
          <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/mui.svg"
            text="MUI"
          />
           <PortfolioSkills
            className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col gap-8 h-[186px] md:h-auto items-center justify-center p-6 sm:px-5 rounded w-full"
            icon="images/sql.png"
            text="SQL"
          />
          
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
