{/* A component for showcasing a small section of my photography portfolio. */}

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, MinusIcon } from "@heroicons/react/24/solid";

export default function ImagePortfolio() {

	const slides = [
		{
			url: "/photography/_DSF3186.jpg"
		},
		{
			url: "/photography/_DSF3071.jpg"
		},
		{
			url: "/photography/_DSF3313.jpg"
		}
	]

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	return (
		<div className={"max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group"}>
			<div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className={"w-full h-full rounded-2xl bg-center bg-cover duration-500"}></div>
			{/* Left arrow */}
			<div className={"hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"}>
				<ChevronLeftIcon onClick={prevSlide} className={"h-5 w-5"}/>
			</div>
			{/* Right arrow */}
			<div className={"hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"}>
				<ChevronRightIcon onClick={nextSlide} className={"h-5 w-5"}/>
			</div>

			{/* Dots */}
			<div className={"absolute bottom-5 left-[50%] -translate-x-1/2 flex gap-2"}>
				{slides.map((slide, index) => (
					<MinusIcon key={index} className={ index === currentIndex ? "text-black dark:text-white h-5 w-5" : "text-gray-400 h-5 w-5"} />
				))}
			</div>
		</div>
	);
}
