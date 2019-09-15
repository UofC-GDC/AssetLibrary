import * as React from "react"
import * as ReactDOM from "react-dom";
import Main from "./main";

import "./style.scss";

function init() {
	let root = document.createElement("div");
	document.body.append(root);
	root.innerText = "yay";
	ReactDOM.render(<Main />, root);
}
init();