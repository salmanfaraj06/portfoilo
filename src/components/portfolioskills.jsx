import React from "react";
import Img from "./img";
import Text from "./text";

const PortfolioSkills = ({ className, icon, text }) => {
    return (
        <div className={`${className} h-[100px] sm:h-auto sm:w-24 flex border-2 border-black-900`}>
            {icon && (
                <div className="items-start sm:items-center justify-start sm:justify-center sm:mx-auto w-12">
                    <Img
                        className="h-12 sm:h-8 sm:hidden"
                        alt="icon"
                        src={icon}
                    />
                </div>
            )}
            {text && (
                <div >
                    <Text
                        className="capitalize text-black-900 text-center text-xl sm:text-sm tracking-[-0.40px] w-full"
                        size="txtSoraBold20"
                    >
                        {text}
                    </Text>
                </div>
            )}
        </div>
    );
};

export default PortfolioSkills;