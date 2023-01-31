import Menu_bar, { navigation } from '@/components/menu_bar';
import React from "react";
import Head from "next/head";

export default function About() {

	navigation[0].current = false;
	navigation[1].current = true;
	navigation[2].current = false;
	navigation[3].current = false;

	return (
		<div>
			<Head>
				<title>About</title>
				<meta name="description" content="About Kourosh Simpkins"/>
        <link rel="icon" href="/favicon.ico" />
			</Head>

			<Menu_bar />

			{/* rest of the code */}

			<div className={"bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40"}>
				<section className={"container mx-auto min-h-screen max-w-4xl"}>
					<div className={"flex flex-col md:flex-row justify-center items-center py-5 gap-x-10"}>
						<div className={"w-full md:w-1/2"}>
              <h1 className={"text-3xl font-SF text-center text-gray-800 dark:text-white"}>About Kourosh Simpkins</h1>
            </div>
						<div className={"w-full md:w-1/2"}>
							<p className={"text-xl font-SFThin text-center text-gray-800 dark:text-white"}>
                Kourosh Simpkins is a full-stack web developer based out of London, UK.
								He is currently studying Creative Computing at the University of the Arts London.
								He has a passion for web development and is always looking to learn new technologies.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
