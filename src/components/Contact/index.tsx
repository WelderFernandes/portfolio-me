export function Contact() {
	return (
		<div className="flex flex-col items-center mx-auto my-10 justify-items-center">
			<h1 className="mb-10 text-3xl font-bold cursor-cell">Contato</h1>
			<div className="container flex justify-center align-middle">
				<form className="w-2/4">
					<input
						type="text"
						name="nome"
						id="nome"
						placeholder="Nome"
						className="w-full p-2 mb-2 font-bold bg-transparent border-2 border-t-0 focus:brightness-125 focus:outline border-x-0 text-gray-light bg:none border-shape caret-zinc-500"
					/>
					<div className="flex flex-row my-4 space-x-4">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="E-mail"
							className="p-2 font-bold bg-transparent border-2 border-t-0 focus:brightness-125 border-x-0 focus:outline text-gray-light bg:none w-96 border-shape caret-zinc-500"
						/>
						<input
							type="tel"
							name="phone"
							id="phone"
							placeholder="Telefone"
							className="p-2 font-bold bg-transparent border-2 border-t-0 focus:brightness-125 border-x-0 focus:outline text-gray-light bg:none w-96 border-shape caret-zinc-500"
						/>
					</div>

					<textarea
						className="w-full p-2 my-4 mb-2 font-bold bg-transparent border-2 rounded-md resize-none focus:brightness-125 focus:outline text-gray-light bg:none border-shape caret-zinc-500"
						placeholder="Mensagem"
					/>
					<div className="flex justify-center my-4">
						<button
							className="px-4 py-2 text-white bg-green-light hover:brightness-90 focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Enviar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
