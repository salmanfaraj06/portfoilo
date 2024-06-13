import React from "react";
import Text from "./text";
import Photo from "./photo";
import SmallScreenPhoto from "./smallphoto";

function Myself() {
  return (
    <div
      id="about"
      className="flex flex-row sm:flex-col sm:justify-center sm:items-center max-w-6xl mx-auto justify-around sm:px-5 py-24 w-full"
    >
      {/* Column for photo */}
      <div className="mb-6 sm:mb-8 md:mb-0 mr-24 sm:mr-0">
        {/* Conditional rendering based on screen size */}
        <div className="sm:hidden md:block ">
          <Photo />
        </div>
        <div className="hidden sm:block ">
          <SmallScreenPhoto />
        </div>
      </div>
      {/* Column for description */}
      <div className="flex flex-col gap-5 justify-start w-full max-w-[600px]">
        <div className="flex flex-row gap-4 items-start justify-start w-full">
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
        <Text
          className="text-base text-gray-600 tracking-[-0.32px] text-justify"
          size="txtSoraRegular16"
        >
          I'm an aspiring full stack developer with a keen interest in UI/UX
          design. Specializing in React.js & Node.js, I am enthusiastic about
          bridging the gap between technical functionality and visual aesthetics
          in digital products.
        </Text>
        <Text
          className="text-base text-gray-600 tracking-[-0.32px] text-justify"
          size="txtSoraRegular16"
        >
          I embarked on my journey as a Computer Science undergraduate at IIT,
          where I discovered my passion for software development. Although I'm
          in the early stages of my career, I've dedicated myself to
          self-learning, taking on various courses and personal projects to
          enhance my skills and I am eager to apply this knowledge in a
          professional setting.
        </Text>
        <Text
          className="text-base text-gray-600 tracking-[-0.32px] text-justify"
          size="txtSoraRegular16"
        >
          I have a deep passion for participating in hackathons and bootcamps,
          as they provide a platform for me to challenge myself and grow as a
          developer. However, I also value my downtime. In my free time, I enjoy
          hanging out with friends, listening to music, and playing soccer. I
          believe in maintaining a balance between professional growth and
          personal relaxation. This balance keeps me motivated and ready for the
          next challenge that comes my way.
        </Text>
        <Text
          className="text-base text-gray-600 tracking-[-0.32px] text-justify"
          size="txtSoraRegular16"
        >
          If you're passionate about innovative projects and exploring the
          possibilities of React, I'd love to connect! Whether it's
          collaborating on cutting-edge applications or discussing new ideas,
          you can reach out to me through any of my social channels. Let's
          create something impactful together and make a difference !
        </Text>
      </div>
    </div>
  );
}

export default Myself;
