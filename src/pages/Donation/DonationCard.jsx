
const DonationCard = ({donation}) => {
    const {
		picture,
		category,
		title,
		category_bg_color,
		text_button_bg_color,
		price,
	} = donation || {};

    return (
		<div className="rounded-lg flex flex-col lg:flex-row justify-start gap-5">
			<div>
				<img
					className="w-[200px] h-[200px] object-cover mx-auto"
					src={picture}
					alt=""
				/>
			</div>
			<div className="mt-5 text-center lg:text-left">
				<div
					className="inline-block p-1 font-semibold rounded-lg">
					{category}
				</div>
				<div className="text-2xl font-semibold">{title}</div>
				<div className="font-semibold text-xl">{price}</div>
				<div className="my-2">
					<button className=" px-5 py-2 rounded-lg">
						View Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default DonationCard;