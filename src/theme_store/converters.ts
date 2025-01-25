function hexToRgb(hex) {
	// Remove the hash (#) if present
	hex = hex.replace(/^#/, "");

	// Parse the hex string into RGB components
	let bigint;
	if (hex.length === 3) {
		// Handle shorthand (e.g., #03F becomes #0033FF)
		bigint = parseInt(
			hex
				.split("")
				.map((char) => char + char)
				.join(""),
			16
		);
	} else if (hex.length === 6) {
		// Handle full hex (e.g., #0033FF)
		bigint = parseInt(hex, 16);
	} else {
		throw new Error("Invalid hex color format");
	}

	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	return { r, g, b };
}
function hexToHsl(hex) {
	// Remove the hash (#) if present
	hex = hex.replace(/^#/, "");

	// Parse the hex string into RGB components
	let r, g, b;
	if (hex.length === 3) {
		// Handle shorthand hex (e.g., #03F becomes #0033FF)
		r = parseInt(hex[0] + hex[0], 16);
		g = parseInt(hex[1] + hex[1], 16);
		b = parseInt(hex[2] + hex[2], 16);
	} else if (hex.length === 6) {
		// Handle full hex (e.g., #0033FF)
		r = parseInt(hex.slice(0, 2), 16);
		g = parseInt(hex.slice(2, 4), 16);
		b = parseInt(hex.slice(4, 6), 16);
	} else {
		throw new Error("Invalid hex color format");
	}

	// Convert RGB values to the range [0, 1]
	r /= 255;
	g /= 255;
	b /= 255;

	// Find min and max RGB values
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const delta = max - min;

	// Calculate hue
	let h;
	if (delta === 0) {
		h = 0; // No hue
	} else if (max === r) {
		h = ((g - b) / delta) % 6;
	} else if (max === g) {
		h = (b - r) / delta + 2;
	} else {
		h = (r - g) / delta + 4;
	}
	h = Math.round(h * 60); // Convert to degrees
	if (h < 0) h += 360;

	// Calculate lightness
	const l = (max + min) / 2;

	// Calculate saturation
	const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

	// Convert to percentages
	return {
		h,
		s: +(s * 100).toFixed(1),
		l: +(l * 100).toFixed(1),
	};
}

// Example usage:
// Output: { h: 240, s: 100, l: 50 }
function hexToHslString(hex) {
	const { h, s, l } = hexToHsl(hex);
	return `hsl(${h}, ${s}%, ${l}%)`;
}

function hexToRgbString(hex) {
	const { r, g, b } = hexToRgb(hex);
	return `rgb(${r}, ${g}, ${b})`;
}

export { hexToRgbString, hexToHslString };
