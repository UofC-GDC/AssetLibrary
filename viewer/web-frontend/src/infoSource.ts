export type AssetRecord = {
	name: string,
	created: string,
	authors: string[],
	description: string,
	tags: string[],
	path: string,
	files: string[]
}

export default class InfoSource {
	index?: AssetRecord[]
	async init() {
		if (this.index) return;

		let resp = await fetch("index.json");
		this.index = await resp.json() as AssetRecord[];
	}
}