import React from "react";

const sizeClasses = {
  txtSoraSemiBold20: "font-semibold font-sora",
  txtSoraRegular16Bluegray100: "font-normal font-sora",
  txtSoraRegular48WhiteA700: "font-normal font-sora",
  txtSoraBold20WhiteA700: "font-bold font-sora",
  txtSoraBold20: "font-bold font-sora",
  txtSoraRegular48: "font-normal font-sora",
  txtSoraBold32: "font-bold font-sora",
  txtSoraRegular16: "font-normal font-sora",
  txtSoraSemiBold16Bluegray100: "font-semibold font-sora",
  txtSoraExtraBold48: "font-extrabold font-sora",
  txtSoraExtraBold48WhiteA700: "font-extrabold font-sora",
  txtSoraSemiBold28: "font-semibold font-sora",
  txtSoraSemiBold24: "font-semibold font-sora",
  txtSoraSemiBold16: "font-semibold font-sora",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text;
