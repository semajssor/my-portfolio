import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FormspreeProvider } from "@formspree/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<FormspreeProvider>
			<App />
		</FormspreeProvider>
	</React.StrictMode>
);