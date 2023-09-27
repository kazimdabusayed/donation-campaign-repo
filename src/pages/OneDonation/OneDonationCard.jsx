/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { getItem } from "localforage";
import swal from "sweetalert";

const OneDonationCard = ({donation}) => {
    const { id,
		picture,
		category,
		title,
		category_bg_color,
		text_button_bg_color,
		description,
		price,
	} = donation || {};

	const handleAddToDonation = () =>{
		const addedDonationArray = [];
		const donationItems = JSON.parse(localStorage.getItem('donations'))

		if (!donationItems) {
			addedDonationArray.push(donation)
			localStorage.getItem(
				"donations",
				JSON.stringify(addedDonationArray))
				swal("Thank You!", "You donated successfully!", "success");
			} else{
				const isExits = donationItems.find(donation => donation.id === parseInt(id));

				if (!isExits) {
					addedDonationArray.push(...donationItems, donation);
					localStorage.getItem(
						"donations",
						JSON.stringify(addedDonationArray)
					);
					swal("Thank You!", "You donated successfully!", "success");
				} else{
					swal("Sorry", "You donated already!", "error");
				}
				
			}
	}

    return (
		<div>
			<div className="my-10 ">
				<div className="relative">
					<img
						className="h-[80vh] w-full object-cover mx-auto"
						src={picture}
						alt=""
					/>
					<div className="absolute  w-full left-0 bottom-0 font-semibold text-lg rounded-lg pt-5">
						<div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
						<button onClick={handleAddToDonation} className="px-8 py-3 mb-5 ml-5 relative bg-red-500">
							Donate ${price}
						</button>
					</div>
				</div>
				<div className="my-5 text-4xl font-bold">{title}</div>
				<div className="text-gray-700">{description}</div>
			</div>
		</div>
	);
};

export default OneDonationCard;