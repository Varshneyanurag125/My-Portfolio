
'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[9rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied , setCopied] = useState(false);
  
  const handleCopy = () => {
       navigator.clipboard.writeText('varshneyanurag125@gmail.com');

    setCopied(true);
  }
  
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{background: ' rgb(4,7,29)',
              backgroundColor : "linear-gradient(90deg, rgba(4,7,29,1) 0%,rgba(12,14,35,1) 100%",
      }}
    >

        <div className={`${id == 6 && 'flex justify-center' } h-full'`}>
            <div className=" w-full h-full absolute">
              {img && (
                <img
                  src={img}
                  alt={img}
                  className={cn(
                    " object-center object-cover",
                    imgClassName
                  )}
                />
              )}
            </div>

            <div className={`absolute  right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>  
              {spareImg && (
                <img
                  src={spareImg}
                  alt={spareImg}
                  className={cn(
                    "  w-full h-full object-center object-cover",
                    imgClassName
                  )}
                /> 
              )}
            </div>
            {id === 6 && (
              <BackgroundGradientAnimation>
                {/* <div className=" absolute z-50 flex items-center justify-center font-bold text-white" /> */}
              </BackgroundGradientAnimation>
            )}

            <div className={cn(titleClassName, ' group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
                {description}
            
              </div>
              <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                {title}
              </div>

            {id === 2 && <GlobeDemo />}

            {id === 3 && (
              <div className=" flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">

                <div className=" flex flex-col gap-3 lg:gap-2 lg:mt-28">
                  {['Html', 'CSS' , 'TailWind' ,'Figma'].map((item) =>(
                    <span key={item} className=" py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center  bg-[#10123E]">
                      {item}
                    </span>
                  ))}
                  <span className=" py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                </div>

                <div className=" flex flex-col gap-3 lg:gap-5  lg:mt-28">
                  {['React.js', 'Next.js' , 'TypeScript'].map((item) =>(
                    <span key={item} className=" py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center  bg-[#10123E]">
                      {item}
                    </span>
                  ))}
                  <span className=" py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                </div>
                
              </div>
            )}

            {id === 6 && (
              <div className=" mt-5 relative4">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    rendererSettings={{
                      preserveAspectRatio: 'xMidYMid slice',
                    }}
                  ></Lottie>
                </div>
                <MagicButton
                title={copied ? 'Email Copied' : 'Copy my E-mail'}
                icon= {<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
                 />
              </div>
            )}
        </div> 
    </div>
  </div>
  );
};
