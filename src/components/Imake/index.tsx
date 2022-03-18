import Image from "next/image";
import DevPng from "../../../public/images/Dev.png";
import SoftwarePng from "../../../public/images/Software.png";
import WebPng from "../../../public/images/Web.png";
export function Imake() {
	return (
		<div className="container flex flex-col items-center justify-center my-28">
			<h1 className="mb-24 text-3xl font-bold">O que eu faço?</h1>
			<div
				className="container flex flex-col items-center justify-center my-8 space-y-8 md:space-x-28 sm:space-y-0 sm:flex-row "
			>
				<div
					className="container space-y-8 text-3xl font-medium  w-82 h-62 bg-shape text-gray-light p-7 hover:border-green-500 hover:border-b-4"
				>
					<Image src={SoftwarePng} width={51} height={47} alt="Imake" />
					<div className="">
						<p>Software </p>
						<p>Development</p>
					</div>
				</div>
				<div
					className="container space-y-8 text-3xl font-medium  w-82 h-62 bg-shape text-gray-light p-7 hover:border-green-500 hover:border-b-4"
				>
					<Image src={DevPng} width={51} height={47} alt="Imake" />
					<div className="">
						<p>Web </p>
						<p>Development</p>
					</div>
				</div>
				<div
					className="container space-y-8 text-3xl font-medium  w-82 h-62 bg-shape text-gray-light p-7 hover:border-green-500 hover:border-b-4"
				>
					<Image src={WebPng} width={51} height={47} alt="Imake" />
					<div className="">
						<p>Web </p>
						<p>Designer</p>
					</div>
				</div>
			</div>
		</div>
	);
}
