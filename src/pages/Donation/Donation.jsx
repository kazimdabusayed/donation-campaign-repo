import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donation, setDoantion] = useState([]);
    const [noFound, setNofound] = useState(false)
    useEffect(() =>{
        const donationItems = JSON.parse(localStorage.getItem("donations"));

        if (donationItems) {
            setDoantion(donationItems)
        } else{
            setNofound("No data found")
        }
    },[])

    const handleSeeAll = () =>{
        
    }

    return (
		<div>
			{noFound ? (
				<p className="h-[80vh] flex justify-center items-center">
					{noFound}
				</p>
			) : (
				<div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
						{donation.map((donation) => (
							<DonationCard
								key={donation.id}
								donation={donation}
							></DonationCard>
						))}
					</div>
					{donation.length >= 4 && (
						<button onClick={handleSeeAll} className="px-5 py-3 bg-green-400 block mx-auto">
							See All
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Donation;