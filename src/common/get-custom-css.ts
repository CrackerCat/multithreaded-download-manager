import { SimpleStorage } from "../util/storage.js"

export async function getCustomCSS() {
	const etcDB = await SimpleStorage.create('etc')
	try {
		return await etcDB.get<string>('customCSS')
	} finally {
		etcDB.close()
	}
}