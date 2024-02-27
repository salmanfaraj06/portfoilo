import React from "react";
import Experience from "./card";
import Text from "./text";

function portfolioExperience() {
  return (
    <div>
      <div className="bg-black-900 flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 py-[60px] w-full">
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
              Experience
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-10 w-full">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolioExperience;
