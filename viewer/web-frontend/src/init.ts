import { render } from "react-dom";
import main from "./main";

import "./style.scss";

function init() {
	let root = document.createElement("div");
	document.body.append(root);
	root.innerText = "yay";
	render(main, root);
}
init();