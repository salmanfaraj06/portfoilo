import React from "react";
import Img from "./img";
import Text from "./text";

const PortfolioSkills = ({ className, icon, text }) => {
    return (
        <div className={className}>
            {icon && (
                <div className="flex flex-col h-14 items-center justify-start w-14">
                    <Img
                        className="h-14  w-14"
                        alt="icon"
                        src={icon}
                    />
                </div>
            )}
            {text && (
                <Text
                    className="capitalize text-black-900 text-center text-xl tracking-[-0.40px] w-full"
                    size="txtSoraBold20"
                >
                    {text}
                </Text>
            )}
        </div>
    );
};

export default PortfolioSkills;