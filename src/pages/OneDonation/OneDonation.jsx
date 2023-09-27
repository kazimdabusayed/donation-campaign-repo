import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import OneDonationCard from "./OneDonationCard";

const OneDonation = () => {

    const {id} = useParams();
    const donations = useLoaderData();
    const [donation, setDoantion] = useState({});

    useEffect(() =>{
        const findDonation = donations?.find((donation) =>donation.id === parseInt(id));
        setDoantion(findDonation);
    },[id,donations]);

    return (
		<div>
			<OneDonationCard donation={donation}></OneDonationCard>
		</div>
	);
};

export default OneDonation;