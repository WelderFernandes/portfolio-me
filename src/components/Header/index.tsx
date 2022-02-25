import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { CgMoon, CgSun } from "react-icons/cg";

export default function Header() {
	const { theme, setTheme } = useTheme();
	const [enabled, setEnabled] = useState(false);
	function handleDarkMode() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<div className="container flex items-center justify-between h-16 mb-2">
			<h1 className="text-2xl font-bold">Welder</h1>

			<Switch
				checked={enabled}
				onChange={handleDarkMode}
				className={`${
					theme === "light"
						? "bg-gradient-to-l dark:bg-yellow-500 bg-black text-white"
						: "bg-yellow-300 dark:text-gray-300 text-gray-800"
				}
          					relative 
							items-center
							px-1
							inline-flex 
							justify-between
							flex-shrink-0 
							h-[30px] 
							w-[70px] 
							border-2 
							border-transparent 
							rounded-full 
							cursor-pointer 
							transition-colors 
							ease-in-out duration-200 
							focus:outline-none 
							focus-visible:ring-2  
							focus-visible:ring-white
							focus-visible:ring-opacity-75`}
			>
				<span className="sr-only">Use setting</span>
				<CgSun className="text-xl " />
				<CgMoon className="text-2xl " />

				<span
					aria-hidden="true"
					className={`${theme === "light" ? "translate-x-9" : "translate-x-0 "}
            				 pointer-events-none 
							 absolute
							 inline-block 
							 h-[24px] 
							 w-[24px] 
							 rounded-full 
							 bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
				/>
			</Switch>
		</div>
	);
}
