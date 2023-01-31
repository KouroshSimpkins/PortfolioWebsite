import * as React from "react";

{/* import the menu bar function from menu_bar.tsx*/}

import Menu_bar, { navigation } from '@/components/menu_bar';
import Head from 'next/head';
import Image from 'next/image';
import MainImage from 'public/_DSF3344.jpg';

export default function Home() {
	navigation[0].current = true;
	navigation[1].current = false;
	navigation[2].current = false;
	navigation[3].current = false;

	return (
		<div>
			<Head>
				<title>Kourosh Simpkins</title>
				<meta name="description" content="Kourosh Simpkins' Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* This menu bar is the menu bar that I built within menu_bar.tsx */}
			<Menu_bar />

			<main className = "bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
				<section className = "container mx-auto min-h-screen max-w-4xl">
					<div className = "py-10 flex flex-row justify-center items-center h-full grid md:grid-cols-2 gap-10">
						<div className = "flex flex-col justify-center items-center max-w-2xl">
								<h1 className = "py-2 text-4xl font-SFThin text-gray-900 dark:text-white">Kourosh Simpkins</h1>
								<h2 className = "py-2 text-2xl font-SFThin text-gray-900 dark:text-white">Creative Technologist</h2>
								<p className = "py-5 leading-8 text-lg text-center font-SFThin text-gray-900 dark:text-white">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</p>
						</div>
						<div className = "items-center aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4 lg:max-w-2xl">
								<Image className = "object-cover shadow-lg rounded-lg" src = {MainImage} alt = "Kourosh Simpkins" />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
