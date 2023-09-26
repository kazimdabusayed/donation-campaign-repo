
const Banner = () => {
    return (
		<div className="relative h-[80vh] bg-green-200 my-6">
			<img
				className="absolute w-full h-full object-cover" src="" alt=""
            />
			<div className="absolute inset-0 bg-white bg-opacity-50"></div>
			<div className="relative flex justify-center items-center h-full">
				<div>
					<h1 className="text-xl md:text-4xl font-bold">
						I Grow By Helping People In Need
					</h1>
					<div className="flex justify-center items-center my-5">
						<form>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg
										className="w-4 h-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 20"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
										/>
									</svg>
								</div>
								<div className="flex">
									<input
										type="search"
										id="default-search"
										className="block w-5/6 text-lg p-4 pl-10 text-gray-900 border-gray-300 rounded-lg bg-gray-50"
										placeholder="Search Category"
										required
									/>
									<button
										type="submit"
										className="bg-red-500 hover:bg-red-600 text-lg text-white py-3 rounded-lg px-5 font-semibold focus:ring-2 focus:outline-none"
									>
										Search
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;