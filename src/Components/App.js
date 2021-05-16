import React from "react";
import Unsplash from "../API/Unsplash";
import SearchBar from "./SearchBar";
import "../scss/AppStyle.css";

export default class App extends React.Component {
	state = { image: [], theme: "white" };

	onSearchSubmit = (term) => {
		Unsplash.get("/search/photos", {
			params: { query: term },
		}).then((res) => this.setState({ image: res.data.results }));
	};
	renderContent() {
		console.log(this.state.image);
		return (
			<div className={`App ${this.state.theme}`}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}

	render() {
		return this.renderContent();
	}
}
