import { AssetRecord } from "../infoSource";
import React = require("react");

const githubPath = "https://github.com/UofC-GDC/AssetLibrary/tree/master/assets/"

export default class Preview extends React.Component<{ asset: AssetRecord }> {
	render() {
		return <div><a href={githubPath + this.props.asset.path}>{this.props.asset.name}</a></div>
	}
}