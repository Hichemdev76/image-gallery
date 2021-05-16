import ImageCard from "./ImageCard";

const ImageList = (props) => {
	const img = props.image.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className="imageList">{img}</div>;
};
export default ImageList;
