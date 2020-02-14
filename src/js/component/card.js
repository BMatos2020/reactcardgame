import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="poker d-inline-block border bg-light p-1 rounded-sm">
			<div className="h-50 d-flex justify-content-between">
				<span>3</span>
				<span>♠</span>
			</div>
			<div className="rotate align-self-end h-50 d-flex justify-content-between">
				<span>3</span>
				<span>♠</span>
			</div>
		</div>
	);
}
