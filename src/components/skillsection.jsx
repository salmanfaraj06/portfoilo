import React from "react";
import Marquee from "react-marquee-slider";
import PortfolioSkills from "./portfolioskills";
import Text from "./text";

function SkillSection() {
  const skills = [
    { icon: "images/java.png", text: "Java" },
    { icon: "images/python.png", text: "Python" },
    { icon: "images/javascript.svg", text: "JavaScript" },
    { icon: "images/html.png", text: "HTML" },
    { icon: "images/figma.svg", text: "Figma" },
    { icon: "images/react.svg", text: "ReactJS" },
    { icon: "images/node.svg", text: "NodeJS" },
    { icon: "images/express.svg", text: "ExpressJS" },
    { icon: "images/css.svg", text: "Tailwind CSS" },
    { icon: "images/mongodb.svg", text: "Mongo DB" },
    { icon: "images/trello.png", text: "Trello" },
    { icon: "images/css.png", text: "CSS" },
    { icon: "images/icon-git.svg", text: "Git" },
    { icon: "images/mui.svg", text: "MUI" },
    { icon: "images/sql.png", text: "SQL" },
  ];

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center md:px-10 px-10 sm:px-5 py-[80px] w-full "
    >
      <div className="flex flex-col gap-5 items-start justify-start mx-auto sm:px-5 w-full ">
        <div className="flex flex-row gap-4 items-center justify-center py-5 w-full ">
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

        <Marquee velocity={25}>
          {skills.map((skill, index) => (
            <PortfolioSkills
              key={index}
              className="bg-white-A700 flex flex-1 flex-col gap-9 h-[180px] md:h-auto items-center justify-center p-6 sm:px-5  w-full "
              icon={skill.icon}
              text={skill.text}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default SkillSection;