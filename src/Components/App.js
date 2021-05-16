import React from "react";
import Unsplash from "../API/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "../scss/AppStyle.css";

export default class App extends React.Component {
	state = { image: [], theme: "light" };

	onSearchSubmit = (term) => {
		Unsplash.get("/search/photos", {
			params: { query: term },
		}).then((res) => this.setState({ image: res.data.results }));
	};
	renderContent() {
		return (
			<div className={`App ${this.state.theme}`}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList image={this.state.image} />
			</div>
		);
	}

	render() {
		return this.renderContent();
	}
}
