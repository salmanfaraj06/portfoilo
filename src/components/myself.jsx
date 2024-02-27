import React from "react";
import Img from "./img";
import Text from "./text";
//linear-gradient(180deg, #AFAFAF 0%, #F2F2F2 100%)
function myself() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center md:px-10 px-20 sm:px-5 py-[70px] w-full sm:mr-5"
    >
      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-7xl mx-auto sm:px-5 w-full ml-[-10px]">
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 30, 
              left: 30, 
              width: "100%",
              height: "95%",
              background: "linear-gradient(180deg, #AFAFAF 0%, #F2F2F2 100%)",
              zIndex: 2,
            }}
          ></div>
          <Img
            className="h-[600px] w-[490px] object-cover ml-7"
            src="images/salman-1.png"
            alt="myself"
            style={{ position: "relative", zIndex: 3}}
          />
        </div>
        <div className="flex md:flex-1 flex-col gap-5 h-[572px] md:h-auto items-start justify-start w-auto md:w-full">
          <div className="flex flex-row gap-4 items-start justify-start py-5 w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
              size="txtSoraRegular48"
            >
              About
            </Text>
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
              size="txtSoraExtraBold48"
            >
              Me
            </Text>
          </div>
          <div className="flex flex-col gap-5 items-start justify-center w-auto md:w-full">
            <Text
              className="leading-[24.00px] max-w-[610px] md:max-w-full text-base text-gray-600 tracking-[0.32px]"
              size="txtSoraRegular16"
            >
              <>
                I'm an aspiring full stack developer with a keen interest in
                UI/UX design. Specializing in React.js & Node.js, I am
                enthusiastic about bridging the gap between technical
                functionality and visual aesthetics in digital products.
              </>
            </Text>
            <Text
              className="leading-[24.00px] max-w-[610px] md:max-w-full text-base text-gray-600 tracking-[0.32px]"
              size="txtSoraRegular16"
            >
              <>
                I embarked on my journey as a Computer Science undergraduate at
                IIT, where I discovered my passion for software development.
                Although I&#39;m in the early stages of my career, I&#39;ve
                dedicated myself to self-learning, taking on various courses and
                personal projects to enhance my skills and I am eager to apply
                this knowledge in a professional setting
              </>
            </Text>
            <Text
              className="leading-[24.00px] max-w-[610px] md:max-w-full text-base text-gray-600 tracking-[0.32px]"
              size="txtSoraRegular16"
            >
              I have a deep passion for participating in hackathons and
              bootcamps, as they provide a platform for me to challenge myself
              and grow as a developer. However, I also value my downtime. In my
              free time, I enjoy hanging out with friends, listening to music,
              and playing soccer. I believe in maintaining a balance between
              professional growth and personal relaxation. This balance keeps me
              motivated and ready for the next challenge that comes my way.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default myself;
