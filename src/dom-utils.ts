export function createSpan(
	root: Element,
	params?: { cls?: string | string[]; text?: string }
): HTMLSpanElement {
	// Use native method when available
	if (root.createSpan) {
		return root.createSpan(params);
	}

	// Otherwise, fallback to this extension
	const el = document.createElement("span");
	if (!params || Object.keys(params).length === 0) {
		return el;
	}

	const { cls, text } = params;

	if (Array.isArray(cls)) {
		cls.forEach((c) => el.classList.add(c));
	} else {
		if (cls) {
			el.classList.add(cls);
		}
	}
	if (text) {
		el.textContent = text;
	}

	root.appendChild(el as Node);

	return el;
}

export function createDiv(
	root: Element,
	params?: { cls?: string | string[]; text?: string }
): HTMLDivElement {
	if (root.createDiv) {
		return root.createDiv(params);
	}

	const el = document.createElement("div");

	if (!params || Object.keys(params).length === 0) {
		return el;
	}

	const { cls, text } = params;

	if (Array.isArray(cls)) {
		cls.forEach((c) => el.classList.add(c));
	} else {
		if (cls) {
			el.classList.add(cls);
		}
	}

	if (text) {
		el.textContent = text;
	}

	root.appendChild(el);

	return el;
}
