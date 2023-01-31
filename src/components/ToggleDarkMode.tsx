{/* A switch to toggle dark mode within tailwindcss*/}

import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/Bs";

{/* This switch is built using HeadlessUI's switch module. */}

{/* TODO: Make sure that the dark mode state is saved to local storage so that the user's preference is saved. */}
{/* I still cannot figure this out, there is an issue wrt local storage on the server, and because dark mode isn't a requirement to pass the unit, I'll save fixing it until later. */}

function DarkModeSwitch() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  };

  return (


    <Switch checked={isDarkMode} onChange={toggleDarkMode} className={`nm-inset-grey-800 relative inline-flex h-6 w-11 items-center rounded-full`}>
      {/* The sr-only class indicates that the text below will only "appear" on screen-readers, to indicate to the user what the button does. */}
      <span className="sr-only">Toggle Dark Mode</span>
      <span className={`${ isDarkMode ? 'translate-x-6' : 'translate-x-1'}
        inline-block h-4 w-4 transform rounded-full bg-white transition`} />
      {/* Have the sun show on the left side of the switch and the moon show on the right side of the switch. When dark mode is on the sun should show. */}
      <BsFillMoonFill className={`${ isDarkMode ? 'hidden' : 'inline-block'}
        absolute h-3.5 w-3.5 text-gray-300 right-1`} />
      <BsFillSunFill className={`${ isDarkMode ? 'inline-block' : 'hidden'}
        absolute h-3.5 text-yellow-300 left-1`} />
    </Switch>
  );
}

export default DarkModeSwitch;
