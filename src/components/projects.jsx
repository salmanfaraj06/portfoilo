import React from "react";
import Img from "./img";
import Text from "./text";

function projects() {
  return (
    <div
      id="project"
      className="bg-black-900 flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 py-[60px] w-full"
    >
      <div className="flex flex-col gap-5 items-start justify-start max-w-7xl mx-auto sm:px-5 w-full">
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
            Projects
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-start py-5 w-full">
          <div className="flex sm:flex-1 flex-col h-[476px] md:h-auto items-center justify-start w-[594px] sm:w-full md:order-2">
            <Img
              className="h-[397px] md:h-auto object-cover rounded-[18px] w-[530px] transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-lg"
              src="images/chatapp.jpg"
              alt="image771"
            />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center w-full md:order-1">
            <div className="flex flex-col gap-7 items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px]"
                size="txtSoraExtraBold48WhiteA700"
              >
                01
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-full"
                size="txtSoraBold32"
              >
                Node Real Time Chat Application
              </Text>
              <Text
                className="leading-[24.00px] max-w-[582px] md:max-w-full text-base text-gray-600 tracking-[-0.32px] text-justify"
                size="txtSoraRegular16"
              >
                <>
                  Developed a real-time chat application using Node.js,
                  Express.js, and ChatEngine The application allows users to
                  create chat rooms and send messages in real-time. The
                  application also supports images and file sharing.
                </>
              </Text>
              <a
                href="https://github.com/salmanfaraj06/node-chatapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img className="h-5 w-5" src="images/img_link.svg" alt="link" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-start py-5 w-full">
          <div className="flex flex-1 flex-col items-start justify-center w-full">
            <div className="flex flex-col gap-7 items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-full"
                size="txtSoraExtraBold48WhiteA700"
              >
                02
              </Text>
              <Text
                className="leading-[40.00px] max-w-[582px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px]"
                size="txtSoraBold32"
              >
                MERN Note Taking Application
              </Text>
              <Text
                className="leading-[24.00px] text-base text-gray-600 tracking-[-0.32px] text-justify"
                size="txtSoraRegular16"
              >
                <>
                  Developed a full-stack note-taking application using the MERN
                  with CRUD operations. The application allows users to create,
                  read, update, and delete notes
                </>
              </Text>
              <a
                href="https://github.com/salmanfaraj06/MERN-NOTE-APP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  className="h-5 w-5"
                  src="images/img_link.svg"
                  alt="link_One"
                />
              </a>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col h-[476px] md:h-auto items-center justify-end w-[594px] sm:w-full">
            <Img
              className="h-[397px] md:h-auto object-cover rounded-[18px] w-[530px] transform transition-all duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-lg"
              src="images/note.jpg"
              alt="image770"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-start py-5 w-full">
          <div className="flex sm:flex-1 flex-col h-[476px] md:h-auto items-center justify-start w-[594px] sm:w-full md:order-2">
            <Img
              className="h-[397px] md:h-auto object-cover rounded-[18px] w-[530px] transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-lg"
              src="images/smarthome.jpg"
              alt="image771"
            />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center w-full md:order-1">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-full"
                size="txtSoraExtraBold48WhiteA700"
              >
                03
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-full"
                size="txtSoraBold32"
              >
                React Smart Home Dashboard
              </Text>
              <Text
                className="leading-[24.00px] max-w-[582px] md:max-w-full text-base text-gray-600 tracking-[-0.32px] text-justify"
                size="txtSoraRegular16"
              >
                <>
                  Developed a smart home dashboard using React.js with clerk
                  authentication. The dashboard displays real-time Weather data
                  from the weather API , Time and allows users to control smart
                  home devices
                </>
              </Text>
              <a
                href="https://smart-home-application-react.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  className="h-5 w-5"
                  src="images/img_link.svg"
                  alt="link_Two"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-start py-5 w-full">
          <div className="flex flex-1 flex-col items-start justify-center w-full">
            <div className="flex flex-col gap-7 items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-full"
                size="txtSoraExtraBold48WhiteA700"
              >
                04
              </Text>
              <Text
                className="leading-[40.00px] max-w-[582px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px]"
                size="txtSoraBold32"
              >
                React Blog Website
              </Text>
              <Text
                className="leading-[24.00px] text-base text-gray-600 tracking-[-0.32px] text-justify"
                size="txtSoraRegular16"
              >
                <>Developed a blog website about Chat GPT using React.js.</>
              </Text>
              <a
                href="https://react-gpt3-website.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  className="h-5 w-5"
                  src="images/img_link.svg"
                  alt="link_One"
                />
              </a>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col h-[476px] md:h-auto items-center justify-end w-[594px] sm:w-full">
            <Img
              className="h-[397px] md:h-auto object-cover rounded-[18px] w-[530px] transform transition-all duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-lg"
              src="images/blog.jpg"
              alt="image770"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-start py-5 w-full">
          <div className="flex sm:flex-1 flex-col h-[476px] md:h-auto items-center justify-start w-[594px] sm:w-full md:order-2">
            <Img
              className="h-[397px] md:h-auto object-cover rounded-[18px] w-[530px] transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-lg"
              src="images/chatapp.jpg"
              alt="phone"
            />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center w-full md:order-1">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-full"
                size="txtSoraExtraBold48WhiteA700"
              >
                05
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-full"
                size="txtSoraBold32"
              >
                MERN Social Media Application
              </Text>
              <Text
                className="leading-[24.00px] max-w-[582px] md:max-w-full text-base text-gray-600 tracking-[-0.32px] text-justify"
                size="txtSoraRegular16"
              >
                <>
                  Developed a social media application using the MERN stack with
                  CRUD operations. The application allows users to upload, view,
                  like, and delete posts 
                </>
              </Text>
              <a
                href="https://github.com/salmanfaraj06/memories-application"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  className="h-5 w-5"
                  src="images/img_link.svg"
                  alt="link_Two"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projects;
