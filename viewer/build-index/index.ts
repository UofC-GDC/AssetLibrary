import * as fs from "fs";
import * as path from "path";

const assetRootPath = path.join(__dirname, "../../assets");
const outputPath = path.join(__dirname, "../public");

async function processDir(dirent: string) {
	const dirPath = path.join(assetRootPath, dirent)
	let files = await fs.promises.readdir(dirPath);

	var i = files.indexOf("info.json");
	if (i < 0) {
		throw new Error(dirent + " did not contain a 'info.json'");
	}
	files.splice(i, 1);

	let info = JSON.parse(await fs.promises.readFile(
		path.join(dirPath, "info.json"),
		{ encoding: "utf-8" }));
	info.path = dirent;
	info.files = files;
	return info;
}

async function main() {
	let assetRoot = await fs.promises.readdir(assetRootPath);
	let index = await Promise.all(assetRoot.map(processDir));
	fs.promises.mkdir(outputPath, { recursive: true });
	await fs.promises.writeFile(path.join(outputPath, "index.json"), JSON.stringify(index));
}

main();