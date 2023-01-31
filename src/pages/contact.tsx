import Menubar, { navigation } from '@/components/menu_bar';
import Head from 'next/head';

{/* !TODO: this contact page will contain a "contact me" form, which will allow a site visitor to send me a message directly via email. */}

export default function Contact() {

	navigation[0].current = false;
	navigation[1].current = false;
	navigation[2].current = false;
	navigation[3].current = true;

	return (
		<div>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Kourosh Simpkins' Contact" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Menubar />

			{/* rest of the code */}

			<div className = "bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
				<section className = "container mx-auto min-h-screen max-w-4xl font-SFThin">
					{/* Build a contact form, that will allow individuals to send me a message directly via email. */}
				</section>
			</div>
		</div>
	);
}
