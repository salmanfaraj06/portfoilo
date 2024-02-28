import React from "react";
import Img from "./img";
import Text from "./text";



function AboutMe() {
  return (
    <div className="h-[75vh] flex items-center justify-center sm-flex-row md:flex-col flex-row mx-16">
      <div className="flex-[.5] space-y-8">
      <div className="flex items-center space-x-4">
        <Text
          className="text-4xl sm:text-2xl md:text-[38px] lg:text-[46px] text-black-900 tracking-[-0.96px] w-auto"
          size="txtSoraRegular48"
        >
          Hello I’am
        </Text>
        <Text
          className="text-4xl sm:text-2xl md:text-[38px] lg:text-[46px] text-black-900 tracking-[-0.96px] w-auto"
          size="txtSoraExtraBold48"
        >
          Salman Faraj
        </Text>
      </div>

        <Text
          className="leading-[24px] max-w-[600px] md:max-w-full text-base text-gray-900 tracking-[0.32px]"
          size="txtSoraRegular16"
        >
          A Computer Science undergraduate at the Informatics Institute of
          Technology. I'm passionate about software development, with a
          particular interest in full-stack technologies. I'm currently seeking
          an internship where I can apply and expand my programming skills. I
          have a strong foundation in both front-end and back-end development,
          and I'm always eager to learn new technologies and improve my skills.
          I look forward to the opportunity to contribute to a dynamic and
          innovative team.
        </Text>

      </div>

      <div className="md:hidden flex-[.5] relative bg-red-400">
        <Img
          className="absolute h-[620px] inset-y-[0] my-auto right-[0] w-[889px] md:h-[400px] md:w-[600px] sm:h-[300px] sm:w-[400px] "
          src="images/img_banner.svg"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default AboutMe;
