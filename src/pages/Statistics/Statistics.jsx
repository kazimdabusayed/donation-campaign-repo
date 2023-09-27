import { Chart } from "react-google-charts";

    const data = [
		["Task", "Doantion"],
		["Total Donation", 12],
		["Your Donation", 2],
	];

    const options = {
	title: "Your Donation Activities",
};

export function Statistics() {
	return (
		<Chart
			chartType="PieChart"
			data={data}
			options={options}
			width={"100%"}
			height={"500px"}
		/>
	);
}

export default Statistics;