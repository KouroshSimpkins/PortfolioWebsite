import Menubar, { navigation } from '@/components/menu_bar';
import WorkListBox, { workType } from "@/components/ListBox";
import Head from 'next/head';
import React from "react";
import ImagePortfolio from "@/components/imagePortfolio";

{/* This page will contain a sort of selection drop down, which can be used to select different groups of work. */}
{/* For example, I could have a drop-down which allows the user to select between "All", "Web Development", "Graphic Design", "Photography", "Music", "Writing", etc. */}
{/* Each of these categories will then display a selection of work from that category. */}
{/* I would like to try and use the "listbox" example found inside headlessUI, again, because it is available, and it is designed with accessibility in mind.*/}

const work = [
	{ id: 1, label: 'Option 1', unavailable: true },
	{ id: 2, label: 'Option 2', unavailable: false },
	{ id: 3, label: 'Option 3', unavailable: false },
]

export default function Contact() {

	navigation[0].current = false;
	navigation[1].current = false;
	navigation[2].current = true;
	navigation[3].current = false;

	const [state, setState] = React.useState({view: 0});

	return (
		<div>
			<Head>
        <title>Work</title>
				<meta name="description" content="Kourosh Simpkins' Work" />
				<link rel="icon" href="/favicon.ico" />
      </Head>

			<Menubar />

			{/* rest of the code */}

			<div className={"bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40"}>
				<section className={"container mx-auto min-h-screen max-w-4xl text-gray-800 dark:text-white"}>

					<div className={"flex space-x-2 py-4 justify-center"}>
						<button type="button" className={"inline-block px-6 py-2.5 bg-blue-600 text-white font-SFThin leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"} onClick={() => setState({view: 1})}>Web Development</button>
						<button type="button" className={"inline-block px-6 py-2.5 bg-blue-600 text-white font-SFThin leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"} onClick={() => setState({view: 2})}>Graphic Design</button>
						<button type="button" className={"inline-block px-6 py-2.5 bg-blue-600 text-white font-SFThin leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"} onClick={() => setState({view: 3})}>Photography</button>
					</div>

					{state.view === 0 && <div>
						<h1 className={"text-4xl font-SFThin text-center"}>Select A Topic</h1>
					</div>}

					{state.view === 1 && <div>
						<h1 className={"text-4xl font-SFThin text-center"}>Web Development</h1>
					</div>}

					{state.view === 2 && <div>Graphic Design</div>}

					{state.view === 3 && <div>
						<ImagePortfolio />
					</div>}

				</section>
			</div>
		</div>
	);
}
