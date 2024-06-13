import React from "react";
import Img from "./img";

function Socials() {
  const socials = [
    {
      href: "https://www.instagram.com/salmaaan.fr/",
      imgSrc: "images/img_socialicon_black_900.svg",
      alt: "Instagram icon"
    },
    {
      href: "https://github.com/salmanfaraj06",
      imgSrc: "images/git.svg",
      alt: "GitHub icon"
    },
    {
      href: "https://www.linkedin.com/in/salman-faraj-2617a924b/",
      imgSrc: "images/img_iconlinkedin.svg",
      alt: "LinkedIn icon"
    }
  ];

  return (
    <div className="mx-auto max-w-6xl md:max-w-[600px]">
    <div className="flex sm:justify-center md:justify-start sm:ml-0 gap-x-9 sm:gap-x-5 sm:mt-5">
      {socials.map((social, index) => (
        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
          <Img className="h-8 w-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src={social.imgSrc} alt={social.alt} />
        </a>
      ))}
    </div>
  </div>
  );
}

export default Socials;