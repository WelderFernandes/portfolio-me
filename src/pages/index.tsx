import type { NextPage } from "next";
import { ThemeProvider } from "next-themes";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import Header from "../components/Header";
import { Imake } from "../components/Imake";
import { InitialPage } from "../components/InitialPage";
import { Skills } from "../components/Skills";

const Home: NextPage = () => {
	return (
		<ThemeProvider attribute="class">
			<div className="container px-8 mx-auto font-poppins">
				<Header />
				<InitialPage />
				<About />
				<Imake />
				<Skills />
				<Contact />
			</div>
		</ThemeProvider>
	);
};

export default Home;
