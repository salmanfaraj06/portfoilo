import React from "react";
import Img from "./img";
import Text from "./text";
import { useState, useEffect } from "react";

function AboutMe() {
  const texts = [
    "Salman Faraj      ",
    "a Solution Engineer  ",
    "a React Developer ",
  ];
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timerId = setInterval(
      () => {
        if (!isDeleting && charIndex < texts[textIndex].length) {
          setTypedText((typedText) => typedText + texts[textIndex][charIndex]);
          setCharIndex((charIndex) => charIndex + 1);
        } else if (charIndex > 0) {
          setIsDeleting(true);
          setTypedText((typedText) => typedText.slice(0, -1));
          setCharIndex((charIndex) => charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex) => (textIndex + 1) % texts.length);
        }
      },
      isDeleting ? 100 : 100
    );

    return () => {
      clearInterval(timerId);
    };
  }, [charIndex, textIndex, texts, isDeleting]);

  return (
    <div className="mx-auto max-w-6xl py-24 sm:py-0 my-16 flex items-center justify-center sm-flex-row md:flex-col flex-row sm:px-5 sm:mx-5">
      <div className="flex-[.5] space-y-8 sm:mt-4">
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-2">
          <Text
            className="sm:text-[24px] text-[38px]  text-black-900 tracking-[-0.96px] w-auto"
            size="txtSoraRegular48"
          >
            Hello I’am
          </Text>

          <Text
            className="sm:text-[24px] text-[38px] h-1 md:h-10 text-black-900 tracking-[-0.96px] w-auto "
            size="txtSoraExtraBold48"
          >
            {typedText}
          </Text>
        </div>

        <Text
          className="leading-[24px] max-w-[600px] text-base text-gray-900 text-justify tracking-[-0.32px]"
          size="txtSoraRegular16"
        >
          A Computer Science undergraduate at the IIT. I'm passionate about software development, with a
          particular interest in full-stack technologies. I'm currently seeking
          an internship where I can apply and expand my programming skills. I
          have a strong foundation in both front-end and back-end development,
          and I'm always eager to learn new technologies and improve my skills.
          I look forward to the opportunity to contribute to a dynamic and
          innovative team.
        </Text>
      </div>

      <div className="md:hidden flex-[.5] relative ">
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
