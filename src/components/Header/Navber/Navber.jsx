import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navber = () => {
    return (
		<div className="p-7 mx-8 shadow-md">
			<nav className="flex justify-between align-center">
				<Logo></Logo>
				<ul className="flex gap-8 mt-4">
					<li>
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "font-semibold text-red-500 underline"
									: ""
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/donation"
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "font-semibold text-red-500 underline"
									: ""
							}
						>
							Donation
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/statistics"
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "font-semibold text-red-500 underline"
									: ""
							}
						>
							Statistics
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navber;