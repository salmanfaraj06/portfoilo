import React from "react";
import Img from "./img";
import { FaInstagram, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

function Socials() {
  const socials = [
    {
      href: "https://www.instagram.com/salmaaan.fr/",
      icon: <FaInstagram />,
      alt: "Instagram icon",
    },
    {
      href: "https://github.com/salmanfaraj06",
      icon: <FaGithub />,
      alt: "GitHub icon",
    },
    {
      href: "https://www.linkedin.com/in/salman-faraj-2617a924b/",
      icon: <FaLinkedin />,
      alt: "LinkedIn icon",
    },
    {
      href: "https://medium.com/@salman.faraj06",
      icon: <FaMedium />,
      alt: "Medium icon",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl md:max-w-[600px]">
  <div className="flex sm:justify-center md:justify-start sm:ml-0 gap-x-9 sm:gap-x-5 sm:mt-5">
    {socials.map((social, index) => (
      <a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        {React.cloneElement(social.icon, { size: "2em" })}
      </a>
    ))}
  </div>
</div>
  );
}

export default Socials;
