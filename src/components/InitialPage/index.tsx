import Image, { ImageProps } from "next/image";

export function InitialPage() {
	const myLoader = ({ src, width, quality }: ImageProps) => {
		return `${src}?w=${width}&q=${quality || 75}`;
	};
	return (
		<div className="grid content-center grid-cols-1 grid-rows-1 text-center sm:grid-cols-2 ">
			<div className="flex flex-col justify-center my-6 text-3xl font-bold sm:text-left">
				<h1>Oi, eu sou</h1>
				<h1>Welder Fernandes</h1>
				<span className="text-sm font-medium text-gray-600">
					Full-stack developer
				</span>
			</div>
			<div>
				<Image
					loader={myLoader}
					src="/images/avatar.png"
					alt="Picture of the author"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
}
