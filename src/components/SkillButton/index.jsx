import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[12px]",
};
const variants = {
  fill: {
    gray_50: "bg-gray-50 text-gray-900",
    yellow_A700: "bg-yellow-A700",
    blue_700: "bg-white-A700 text-black",
    blue_gray_300: "bg-blue_gray-300",
    blue_gray_800: "bg-blue_gray-800 text-blue_gray-100",
    white_A700 :"bg-white-A700 text-black",
    black_900: "bg-black-900 text-white",
  },
};
const sizes = {
  sm: "h-[36px] px-4 text-base",
  md: "h-[64px] px-[7px]",
  xs: "h-[28px] px-5 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["sm", "md", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50", "yellow_A700", "blue_700", "blue_gray_300", "blue_gray_800", "white"]),
};

export default Button ;
