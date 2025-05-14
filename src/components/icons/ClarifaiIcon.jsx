import useDarkMode from "../../hooks/useDarkMode";

function ClarifaiIcon({ title = "Clarifai" }) {
	const isDark = useDarkMode();

	const src = isDark
		? "/assets/icons/clarifai_icon_light.svg"
		: "/assets/icons/clarifai_icon_dark.svg";

	return <img src={src} alt={title} title={title} style={{ width: 24, height: 24 }} />;
}

export default ClarifaiIcon;
