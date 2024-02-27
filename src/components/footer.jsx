import React from 'react'
import Img from './img'
import Text from './text'

function footer() {
  return (
    <div>
      <div className="bg-white-900 flex flex-col items-start justify-start  md:px-10 px-20 sm:px-5 py-6 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-7xl mx-auto sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Img
                  className="h-10 w-[39px]"
                  src="images/img_logo1.svg"
                  alt="logoOne_One"
                />
                <Text
                  className="capitalize text-black-A700 text-xl tracking-[-0.40px] w-auto"
                  size="txtSoraBold20WhiteA700"
                >
                  Personal
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-auto">
              <Text
                className="text-base text-right text-black-A700 tracking-[-0.32px] w-auto"
                size="txtSoraSemiBold16"
              >
                Salman Faraj Saheerdeen
              </Text>
            </div>
          </div>
        </div>
    </div>
  )
}

export default footer
