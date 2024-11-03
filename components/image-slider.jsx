'use client'

import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <div className="relative">

            <div className="p-6 bg-white dashed-border-l drop-shadow-1 rounded-2xl">

                <button
                    onClick={handlePrevSlide}
                    className="absolute -left-4 m-auto inset-y-1/2 cursor-pointer text-paragraph z-20"
                >
                    <div className=" bg-white rounded-full drop-shadow-2 p-3 hover:drop-shadow-1 stroke-paragraph">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 24L12 16L20 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>

                </button>

                <div className="w-full flex overflow-hidden relative m-auto rounded-lg aspect-video">
                    <Swipe
                        onSwipeLeft={handleNextSlide}
                        onSwipeRight={handlePrevSlide}
                        className="relative z-10 w-full h-full"
                    >
                        {images.map((image, index) => {
                            if (index === currentSlide) {
                                return (
                                    <img
                                        key={image.id}
                                        src={image.src}
                                        alt={image.alt}
                                        layout="fill"
                                        objectFit="contain"
                                        className="animate-fadeIn"
                                    />
                                );
                            }
                        })}
                    </Swipe>
                </div>

                <button
                    onClick={handleNextSlide}
                    className="absolute -right-4 m-auto inset-y-1/2 cursor-pointer text-paragraph z-20 "
                >
                    <div className=" bg-white rounded-full drop-shadow-2 p-3 hover:drop-shadow-1 stroke-paragraph">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8L20 16L12 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>


                </button>
            </div>



            <div className="relative flex max-w-full justify-center p-4 my-4 rounded-full bg-white flex-row w-min m-auto drop-shadow-2">
                {images.map((_, index) => {
                    return (
                        <div
                            className={
                                index === currentSlide
                                    ? "h-4 w-4 bg-gray-700 rounded-full mx-2 cursor-pointer"
                                    : "h-4 w-4 bg-gray-300 rounded-full mx-2 cursor-pointer"
                            }
                            key={index}
                            onClick={() => {
                                setCurrentSlide(index);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}