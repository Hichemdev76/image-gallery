import React from "react";

export default class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	renderContent() {
		return (
			<div className="SearchBar">
				{this.state.term === "" ? (
					<h1 className="animate__animated animate__fadeInDown animate__fadeIn ">
						ImageSearch
					</h1>
				) : (
					""
				)}
				<form onSubmit={this.onFormSubmit}>
					{this.state.term === "" ? (
						""
					) : (
						<label className="animate__animated animate__fadeIn ">
							ImageSearch :{" "}
						</label>
					)}
					<input
						type="text"
						onChange={(e) => this.setState({ term: e.target.value })}
						value={this.state.term}
					/>
				</form>
			</div>
		);
	}

	render() {
		return this.renderContent();
	}
}
