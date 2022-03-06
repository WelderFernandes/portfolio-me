import Image from "next/image";

export function About() {
	return (
		<div className="my-10">
			<div className="text-center">
				<h1 className="text-3xl font-bold">Sobre min</h1>
				<p className="indent-12 leading-relaxed">
					Sou um desenvolvedor web com paixão pela criação de belos sites e
					aplicações web. Tenho mais de 5 anos de experiência trabalhando na
					indústria de TI, 3 dos quais como desenvolvedor em tempo integral.
					Trabalhei em várias funções, desde um Desenvolvedor Web interno em
					várias empresas até ser um desenvolvedor autônomo, portanto tenho uma
					ampla gama de experiência na área.
				</p>
			</div>

			<div
				className=" my-12 
                            flex 
                            flex-col
                            justify-center
                            items-center
                            text-center
                            md:space-x-28 
                            space-y-8
                            sm:space-y-0
                            sm:flex-row 
                            "
			>
				<div className="w-36 grid-flow-col">
					<div>
						<Image
							src="/images/Circle.png"
							width={64}
							height={64}
							alt="Circle"
						/>
					</div>
					<div>
						<span>Nome</span>
						<p>Welder Fernandes</p>
					</div>
				</div>

				<div className="w-36 grid-flow-col">
					<div>
						<Image
							src="/images/Circle.png"
							width={64}
							height={64}
							alt="Circle"
						/>
					</div>
					<div>
						<span>E-mail</span>
						<p>welderx3@gmail.com</p>
					</div>
				</div>

				<div className="w-40 grid-flow-col">
					<div>
						<Image
							src="/images/Circle.png"
							width={64}
							height={64}
							alt="Circle"
						/>
					</div>
					<div>
						<span>Telefone</span>
						<p>+55 (27) 98821-7570</p>
					</div>
				</div>

				<div className="w-36 grid-flow-col">
					<div>
						<Image
							src="/images/Circle.png"
							width={64}
							height={64}
							alt="Circle"
						/>
					</div>
					<div>
						<span>Instagram</span>
						<p>@weldernfernandes</p>
					</div>
				</div>
			</div>
		</div>
	);
}
