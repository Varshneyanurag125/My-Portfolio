import React from 'react';
import Image from 'next/image';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import { profile } from 'console';
import { div } from 'framer-motion/client';

const Footer = () => {
    return (
        <footer className=' w-full pt-20 pb-10' id='contact'>
            <div className=' w-full absolute left-0 -bottom-72 min-h-96'>
                <img 
                src="/footer-grid.svg" 
                alt="grid" 
                className=' w-full h-full opacity-100'
                />
            </div>
            <div className=' flex flex-col items-center'>
                <h1 className=' heading lg:max-w-[445vw]'> Ready to take <span className=' text-purple'>your</span> digital presence to the next level</h1>
                <p className=' text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how i can help you achieve your goals.</p>
                <a href="mailto:varshneyanurag125@gmail.com">
                    < MagicButton
                    title="Lets get in touch "
                    icon ={<FaLocationArrow />}
                    position='right'
                    />
                </a>
            </div>
            <div className=' flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className=' md:text-base text-sm md:font-normal font-light ' >Copyright © 2024 Anurag Varshney</p>
                <div className=' flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((socialMedia) => (
                        <div key={socialMedia.id} className=' w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg
                         border-black-300'>
                            <Image src={socialMedia.img} alt="" width="20" height="20" />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;