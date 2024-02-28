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
    <div className="flex justify-start gap-8 ml-[65px] w-[200px]">
      {socials.map((social, index) => (
        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" >
          <Img className="h-8 w-9" src={social.imgSrc} alt={social.alt} />
        </a>
      ))}
    </div>
  );
}

export default Socials;