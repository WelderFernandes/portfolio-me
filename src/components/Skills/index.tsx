export function Skills() {
	return (
		<div className="flex flex-col items-center mx-auto my-10 justify-items-center">
			<h1 className="mb-4 text-3xl font-bold cursor-cell">Skills</h1>
			<div className="container flex flex-col justify-between px-24 my-8 space-y-8 align-middle sm:px-0 sm:space-y-0 sm:flex-row bg-shape">
				<div className="space-y-8 text-3xl font-medium bg-shape text-gray-light p-7">
					<div className="text-center cursor-cell">
						<h1 className="font-bold text-8xl hover:brightness-125">30%</h1>
						<p className="text-green-light">HTML</p>
					</div>
				</div>

				<div className="space-y-8 text-3xl font-medium bg-shape text-gray-light p-7">
					<div className="text-center cursor-cell">
						<h1 className="font-bold text-8xl hover:brightness-125">30%</h1>
						<p className="text-green-light">CSS</p>
					</div>
				</div>

				<div className="space-y-8 text-3xl font-medium bg-shape text-gray-light p-7">
					<div className="text-center cursor-cell">
						<h1 className="font-bold text-8xl hover:brightness-125">20%</h1>
						<p className="text-green-light">JAVASCRIPT</p>
					</div>
				</div>

				<div className="space-y-8 text-3xl font-medium bg-shape text-gray-light p-7">
					<div className="text-center cursor-cell">
						<h1 className="font-bold text-8xl hover:brightness-125">20%</h1>
						<p className="text-green-light">PHP</p>
					</div>
				</div>
			</div>
		</div>
	);
}
