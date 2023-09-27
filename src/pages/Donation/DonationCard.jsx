
const DonationCard = ({donation}) => {
    const {
		picture,
		category,
		title,
		category_bg_color,
		text_button_bg_color,
		card_bg_color,
		price,
	} = donation || {};

    return (
		<div
			className="rounded-lg flex flex-col lg:flex-row justify-start gap-5"
			style={{
				backgroundColor: card_bg_color,
			}}
		>
			<div>
				<img
					className="w-[200px] h-[200px] object-cover mx-auto"
					src={picture}
					alt=""
				/>
			</div>
			<div className="mt-5 text-center lg:text-left">
				<div
					className="inline-block p-1 font-semibold rounded-lg"
					style={{
						backgroundColor: text_button_bg_color,
						color: { category_bg_color },
					}}
				>
					{category}
				</div>
				<div className="text-2xl font-semibold">{title}</div>
				<div
					className="font-semibold text-xl"
					style={{ color: text_button_bg_color }}
				>
					${price}
				</div>
				<div className="my-2">
					<button
						className=" px-5 py-2 rounded-lg"
						style={{
							backgroundColor: text_button_bg_color,
						}}
					>
						View Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default DonationCard;