/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DonationsCard = ({donation}) => {

    const { id,
		picture,
		category,
		title,
		category_bg_color,
		card_bg_color,
		text_button_bg_color,
	} = donation || {};

    return (
		<Link to={`/donations/${id}`}>
			<div
				className=""
				style={{
					backgroundColor: card_bg_color,
				}}
			>
				<img
					className="rounded-lg text-center lg:text-left"
					src={picture}
					alt=""
				/>
				<div
					className="font-semibold text-base my-2 mx-3 p-1 inline-block rounded-lg"
					style={{
						backgroundColor: category_bg_color,
					}}
				>
					{category}
				</div>
				<p
					className="font-semibold text-lg my-2 px-3"
					style={{
						color: text_button_bg_color,
					}}
				>
					{title}
				</p>
			</div>
		</Link>
	);
};

export default DonationsCard;