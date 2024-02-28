import React, { useState } from "react";
import Img from "./img";
import Button from "./button";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col items-center justify-center px-10 md:px-5 py-6 w-full max-w-full ">
      <div className="flex flex-row md:gap-10 items-center justify-between max-w-full sm:px-5 px-5 w-full">
        <div className="header-row my-3">
          <div className="flex flex-row gap-3 items-center justify-start">
            <a
              href="/"
              className="capitalize text-black-900 text-xl  w-auto font-bold "
            >
              <Img
                className="h-10 w-[39px]"
                src="images/favicon.png"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="font-bold flex sm:flex-col flex-row gap-8 md:hidden items-center justify-center w-auto">
          <a
            href="#skills"
            className="capitalize text-black-900 text-xl  w-auto p-2"
          >
            Skills
          </a>
          <a
            href="#about"
            className="font-boldcapitalize text-black-900 text-xl  w-auto px-2"
          >
            About Me
          </a>
          <a
            href="#project"
            className="capitalize text-black-900 text-xl  w-auto p-2"
          >
            Project
          </a>
          <a
            href="#awards"
            className="capitalize text-black-900 text-xl w-auto p-2"
          >
            Awards
          </a>
        </div>
        <div className="flex items-center space-x-5">
          <a
            href="https://drive.google.com/uc?export=download&id=1cHUymhkgmA7cBffZLwfBhtZ7c2zQEUJF"
            download
          >
            <Button
              className="cursor-pointer flex h-14 sm:hidden items-center justify-center min-w-[153px]"
              rightIcon={
                <Img
                  className="h-5 mt-[3px] mb-0.5 ml-2 sm:hidden"
                  src="images/img_download.svg"
                  alt="download"
                />
              }
              shape="round"
              color="black_900"
              size="xs"
              variant="fill"
            >
              <div className="font-semibold sm:hidden text-left text-xl tracking-[0.40px]">
                My Resume
              </div>
            </Button>
          </a>

          <div className="hidden md:block">
            <button
              type="button"
              className="text-black-500 hover:text-black-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="block lg:hidden text-right mt-4 mr-5 space-y-5 w-full">
          <a
            href="#skills"
            className="block py-1 capitalize text-black-900 text-xl hover:underline mr-[50px]"
          >
            Skills
          </a>
          <a
            href="#about"
            className="block py-1 capitalize text-black-900 text-xl hover:underline mr-[50px]"
          >
            About Me
          </a>
          <a
            href="#project"
            className="block py-1 capitalize text-black-900 text-xl hover:underline mr-[50px]"
          >
            Projects
          </a>
          <a
            href="#awards"
            className="block py-1 capitalize text-black-900 text-xl hover:underline mr-[50px]"
          >
            Awards
          </a>
          <a
            className="block py-1 capitalize text-black-900 text-xl hover:underline mr-[50px]"
            href="https://drive.google.com/uc?export=download&id=1cHUymhkgmA7cBffZLwfBhtZ7c2zQEUJF"
            download
          >
            My Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
