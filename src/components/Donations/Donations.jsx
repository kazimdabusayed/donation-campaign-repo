/* eslint-disable react/prop-types */
import DonationsCard from "./DonationsCard";

const Donations = ({donations}) => {

    return (
		<div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{donations?.map((donation) => (
				<DonationsCard
					key={donation.id}
					donation={donation}
				></DonationsCard>
			))}
		</div>
	);
};

export default Donations;