import { requestUrl } from "obsidian";

export interface RequestOptions {
	url: string;
	method?: string;
	body?: string;
	contentType?: string;
}

export type Request = <T>(options: RequestOptions) => Promise<T>;

export function promiseWrappedRequest<T>(options: RequestOptions): Promise<T> {
	return new Promise(async (resolve, reject) => {
		const response = await requestUrl(options);
		if (response.status < 400) {
			const scryfallData = response.json as T;
			resolve(scryfallData);
		} else {
			reject(
				new Error(`RequestError: ${response.status}: ${response.text}`)
			);
		}
	});
}
