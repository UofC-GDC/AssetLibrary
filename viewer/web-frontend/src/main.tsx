import * as React from "react"
import InfoSource from "./infoSource"
import AssetDisplay from "./AssetDisplay";

export default class Main extends React.Component<{}, { info: InfoSource, ready: boolean }> {
	constructor(props: {}) {
		super(props);
		let info = new InfoSource();
		this.state = { info: info, ready: false }
		info.init().then(() => this.setState({ ready: true }));
	}
	render() {
		if (this.state.info.index != undefined)
			return <>{this.state.info.index.map(asset => <AssetDisplay asset={asset} key={asset.path} />)}</>
		else
			return <>Loading...</>
	}
}