import type { NextPage } from "next";
import { ThemeProvider } from "next-themes";
import { About } from "../components/About";
import Header from "../components/Header";
import { InitialPage } from "../components/InitialPage";

const Home: NextPage = () => {
	return (
		<ThemeProvider attribute="class">
			<div className="container px-8 mx-auto font-poppins">
				<Header />
				<InitialPage />
				<About />
			</div>
		</ThemeProvider>
	);
};

export default Home;
