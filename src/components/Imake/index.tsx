import Image from "next/image";
import DevPng from "../../../public/images/dev.png";
import SoftwarePng from "../../../public/images/software.png";
import WebPng from "../../../public/images/web.png";
export function Imake() {
	return (
		<div className="container flex flex-col items-center justify-center my-28">
			<h1 className="text-3xl font-bold mb-24">O que eu faço?</h1>
			<div
				className="flex 
							flex-col
                            justify-center
                            items-center
							space-y-8
							my-8 
							md:space-x-28 
                            sm:space-y-0
                            sm:flex-row "
			>
				<div
					className="
								w-82 
								h-62 
								bg-shape 
								text-gray-light 
								text-3xl
								font-medium 
								container
								p-7 
								space-y-8
								hover:border-green-500
								hover:border-b-4
								"
				>
					<Image src={SoftwarePng} width={51} height={47} alt="Imake" />
					<div className="">
						<p>Software </p>
						<p>Development</p>
					</div>
				</div>
				<div
					className="
								w-82 
								h-62 
								bg-shape 
								text-gray-light 
								text-3xl
								font-medium 
								container
								p-7 
								hover:border-green-500
								hover:border-b-4
								space-y-8"
				>
					<Image src={DevPng} width={51} height={47} alt="Imake" />
					<div className="">
						<p>Software </p>
						<p>Development</p>
					</div>
				</div>
				<div
					className="
								w-82 
								h-62 
								bg-shape 
								text-gray-light 
								text-3xl
								font-medium 
								container
								p-7 
								hover:border-green-500
								hover:border-b-4
								space-y-8"
				>
					<Image src={WebPng} width={51} height={47} alt="Imake" />
					<div className="">
						<p>Software </p>
						<p>Development</p>
					</div>
				</div>
			</div>
		</div>
	);
}
