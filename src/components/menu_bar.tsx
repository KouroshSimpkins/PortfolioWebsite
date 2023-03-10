import React, { Fragment } from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "@/components/ToggleDarkMode";

{ /* navigation array. This array allows me to make changes on the fly without having to manually change the code for the menu bar. */ }
export const navigation = [
	{ name: "Home", href: "/", current: false },
	{ name: "About", href: "about", current: false },
	{ name: "Work", href: "work", current: false },
	{ name: "Contact", href: "contact", current: false },
];

{/* !!TODO: Check whether it is tailwind components, and find the link to the original code. */}
{/* This code is based on an example menu bar provided by "tailwind components" */}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Menu_bar() {
	return (
		<Disclosure as = "nav" className = "bg-gray-800">
			{({ open }) => (
				<>
					<div className = "max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className = "relative flex items-center justify-between h-16">
							<div className = "absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className = "inline-flex items-center justify-center p-2 rounded-md text-gray-400 nm-flat-grey-800 hover:text-white hover:nm-concave-grey-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									{/* The sr-only tag indicates that this text is only visible to screen-readers. */}
									<span className = "sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className = "block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className = "block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className = "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className = "flex-shrink-0 flex items-center">
									<img
										className = "block lg:hidden h-8 w-auto"
										src = "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
										alt = "Workflow"
									/>
									<img
										className = "hidden lg:block h-8 w-auto"
										src = "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
										alt = "Workflow"
									/>
								</div>
								<div className = "hidden sm:block sm:ml-6">
									<div className = "flex space-x-4">
										{navigation.map((item) => (
											<a
												key = {item.name}
												href = {item.href}
												className = {classNames(
													item.current ? 'nm-inset-grey-800 text-white' : 'nm-flat-grey-800 text-gray-300 hover:nm-concave-grey-800 hover:text-white',
													'px-3 py-2 rounded-md text-SFRegular font-medium'
												)}
												aria-current = {item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className = "">
								<DarkModeToggle />
							</div>
						</div>
					</div>

					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Disclosure.Panel className = "sm:hidden">
							<div className = "px-2 pt-2 pb-3 space-y-2.5">
								{navigation.map((item) => (
									<Disclosure.Button
										key = {item.name}
										as="a"
										href = {item.href}
										className = {classNames(
											item.current ? 'nm-inset-grey-800 text-white' : 'nm-flat-grey-800 text-gray-300 hover:nm-concave-grey-800 hover:text-white',
											'block px-3 py-2 rounded-md text-SFRegular font-medium'
										)}
										aria-current = {item.current ? 'page' : undefined}
									>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	)
}
