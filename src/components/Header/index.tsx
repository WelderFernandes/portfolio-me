import { useTheme } from "next-themes";
import { CgMoon, CgSun } from "react-icons/cg";

export default function Header() {
	const { theme, setTheme } = useTheme();

	function handleDarkMode() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<div className="container flex items-center justify-between h-16 mb-2">
			<h1 className="text-2xl font-bold">Welder</h1>
			<ul className="flex ">
				<li>
					<button type="button" onClick={handleDarkMode}>
						{theme === "light" ? (
							<CgMoon className="text-2xl" />
						) : (
							<CgSun className="text-2xl" />
						)}
					</button>
				</li>
			</ul>
		</div>
	);
}
