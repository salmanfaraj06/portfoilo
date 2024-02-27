import React from "react";
import Img from "./img";
import Text from "./text";

const Card = ({ className, Title, date, description, logoSrc }) => {
  return (
    <>
      <div className={className}>
        <div className="flex relative w-full">
          <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-center justify-start max-w-[1018px] ml-[undefinedpx] my-auto w-full z-[1]">
            <div className="md:h-7 h-8 p-0.5 relative w-8">
              <Img
                className="absolute h-5 inset-[0] justify-center m-auto w-5"
                src="images/img_play.svg"
                alt="play"
              />
              {logoSrc && (
                <Img
                  className="absolute inset-x-[0] object-cover m-auto "
                  src={logoSrc}
                  alt="Logo"
                />
              )}
            </div>
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.48px] w-auto"
              size="txtSoraSemiBold24"
            >
              {Title}
            </Text>
          </div>
          <Text
            className="ml-[-55px] text-base text-blue_gray-100 text-center tracking-[-0.32px] w-auto "
            size="txtSoraSemiBold16Bluegray100"
          >
            {date}
          </Text>
        </div>
        <Text
          className="leading-[24.00px] max-w-[1120px] md:max-w-full text-base text-blue_gray-100 tracking-[0.32px]"
          size="txtSoraRegular16Bluegray100"
        >
          {description}
        </Text>
      </div>
    </>
  );
};

export default Card;