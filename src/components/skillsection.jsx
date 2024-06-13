import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import PortfolioSkills from "./portfolioskills";
import Text from "./text";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const frontendSkills = [
  { icon: "images/javascript.svg", text: "JavaScript" },
  { icon: "images/html.png", text: "HTML" },
  { icon: "images/css.png", text: "CSS" },
  { icon: "images/react.svg", text: "ReactJS" },
  { icon: "images/figma.svg", text: "Figma" },
  { icon: "images/css.svg", text: "Tailwind" },
];

const backendSkills = [
  { icon: "images/node.svg", text: "NodeJS" },
  { icon: "images/express.svg", text: "ExpressJS" },
  { icon: "images/sql.png", text: "SQL" },
  { icon: "images/mongodb.svg", text: "MongoDB" },
  { icon: "images/python.png", text: "Python" },
  { icon: "images/java.png", text: "Java" },
];

const devopsSkills = [
  { icon: "images/icon-git.svg", text: "Git" },
  { icon: "images/trello.png", text: "Trello" },
  { icon: "images/github.png", text: "GitHub" },
  { icon: "images/docker.png", text: "Docker" },
  { icon: "images/google.jpeg", text: "Google Cloud" },
  { icon: "images/cloud.png", text: "Cloudflare" },
];

const SkillSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skills = [
    { title: "Frontend", skills: frontendSkills },
    { title: "Backend", skills: backendSkills },
    { title: "DevOps", skills: devopsSkills },
  ];

  const customArrow = (onClickHandler, isLeft) => (
    <div
      onClick={onClickHandler}
      className={`absolute top-1/2 transform -translate-y-1/2 sm:hidden cursor-pointer p-2 z-10 ${
        isLeft ? "left-0" : "right-0"
      }`}
    >
      {isLeft ? (
        <FaArrowLeft className="text-black text-2xl" />
      ) : (
        <FaArrowRight className="text-black text-2xl" />
      )}
    </div>
  );

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center mx-auto max-w-7xl md:px-10 px-10 py-[80px] w-full"
    >
      <div className="flex flex-col gap-5 mx-auto w-full">
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
        <div className="mx-auto sm:w-[75%] md:w-[95%] lg:w-1/3 xl:w-1/4">
          {isMobile ? (
            // Vertical scrolling view for mobile
            <div>
              {skills.map((category, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-center sm:w-full md:w-full lg:w-full xl:w-full"
                >
                  <Text
                    className="text-2xl mx-auto md:text-2xl sm:text-xl mb-4 md:mb-0 w-full text-center"
                    size="txtSoraSemiBold24"
                  >
                    {category.title}
                  </Text>
                  <div className="grid p-10 sm:p-3 m-2 grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-12">
                    {category.skills.map((skill, index) => (
                      <PortfolioSkills
                        key={index}
                        className="bg-white-A700 flex gap-x-7 md:flex-row sm:flex-col items-center justify-evenly p-5 sm:p-6 w-full shadow-lg rounded-lg"
                        icon={skill.icon}
                        text={skill.text}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay={!/Mobi|Android/i.test(navigator.userAgent)}
              interval={2700}
              useKeyboardArrows
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && customArrow(onClickHandler, true)
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && customArrow(onClickHandler, false)
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => (
                <li
                  key={index}
                  onClick={onClickHandler}
                  className={`inline-block mx-2 rounded-full w-2 h-2 cursor-pointer ${
                    isSelected ? "bg-black-900" : "bg-gray-400"
                  }`}
                  aria-label={`${label} ${index + 1}`}
                />
              )}
            >
              {skills.map((category, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-center sm:w-full md:w-full lg:w-full xl:w-full"
                >
                  <Text
                    className="text-2xl mx-auto md:text-2xl sm:text-xl mb-4 md:mb-0 w-full text-center"
                    size="txtSoraSemiBold24"
                  >
                    {category.title}
                  </Text>
                  <div className="grid grid-cols-3 p-10 m-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
                    {category.skills.map((skill, index) => (
                      <PortfolioSkills
                        key={index}
                        className="bg-white-A700 flex gap-x-7 md:flex-row sm:flex-col items-center justify-evenly p-5 sm:p-5  w-full shadow-lg rounded-lg"
                        icon={skill.icon}
                        text={skill.text}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
