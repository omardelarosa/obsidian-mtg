import { requestUrl } from "obsidian";

export interface RequestOptions {
	url: string;
	method?: string;
	body?: string;
	contentType?: string;
	throw?: boolean;
	headers?: Record<string, string>;
}

export type Request = <T>(options: RequestOptions) => Promise<T>;

export function promiseWrappedRequest<T>(options: RequestOptions): Promise<T> {
	return new Promise(async (resolve, reject) => {
		var response;
		try {
			response = await requestUrl(options);
		} catch (error) {
			console.log(`request ${options.url} error: ${error}`);
			const scryfallData = null as T;
			resolve(scryfallData);
			return;
		}
		if (response.status < 400) {
			const scryfallData = response.json as T;
			resolve(scryfallData);
		} else {
			reject(
				new Error(
					`RequestError: ${response.status}: ${response.text} / ${response}`
				)
			);
		}
	});
}
