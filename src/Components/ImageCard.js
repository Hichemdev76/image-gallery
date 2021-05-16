import React from "react";

export default class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}
	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
	}
	setSpans = () => {
		const imgHeight = this.imageRef.current.clientHeight;
		const spans = Math.ceil(imgHeight / 10);
		this.setState({ spans });
	};
	renderContent(des, urls) {
		const style = {
			gridRowEnd: "span " + this.state.spans,
			height: this.imgHeight,
			paddingBottom: "5px",
		};

		return (
			<div style={style} className="animate__animated animate__fadeIn">
				<img ref={this.imageRef} alt={des} src={urls.regular} />
			</div>
		);
	}

	render() {
		const { description, urls } = this.props.image;
		return this.renderContent(description, urls);
	}
}
