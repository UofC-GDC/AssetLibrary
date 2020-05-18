import { AssetRecord } from "../infoSource";
import * as React from "react";

const githubPath = "https://github.com/UofC-GDC/AssetLibrary/tree/master/assets/"

export default class AssetDisplay extends React.Component<{ asset: AssetRecord }> {
	render() {
		return <div><a href={githubPath + this.props.asset.path}>{this.props.asset.name}</a></div>
	}
}