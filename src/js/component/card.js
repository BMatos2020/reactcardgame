import React, { useState } from "react";

export function Card() {
	return (
		<div className="poker d-inline-block border bg-light p-1 rounded-lg">
			<div className="h-100 d-flex justify-content-between">
				<span>3</span>
				<span>♠</span>
			</div>
			<div className="rotate align-self-end h-100 d-flex justify-content-between">
				<span>3</span>
				<span>♠</span>
			</div>
		</div>
	);
}
