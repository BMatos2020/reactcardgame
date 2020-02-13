import React, { useState } from "react";
import { Card } from "./card";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<div className="text-center mt-5">
				<h1>Card Shuffle</h1>
			</div>
			<Card />
		</>
	);
}
