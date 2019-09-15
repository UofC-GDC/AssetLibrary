import * as React from "react"
import InfoSource from "./infoSource"
import Preview from "./AssetDisplay/preview";

export default class Main extends React.Component<{}, { info: InfoSource, ready: boolean }> {
	constructor(props: {}) {
		super(props);
		let info = new InfoSource();
		this.state = { info: info, ready: false }
		info.init().then(() => this.setState({ ready: true }));
	}
	render() {
		if (this.state.info.index != undefined)
			return <>{this.state.info.index.map(asset => <Preview asset={asset} key={asset.path} />)}</>
		else
			return <>Loading...</>
	}
}