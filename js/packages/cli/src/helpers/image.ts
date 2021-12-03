import path from 'path';
import {
	EXTENSION_GLB,
	EXTENSION_PNG,
	EXTENSION_GIF
} from '../helpers/constants';

export function validImageExtensions() {
	return [
		EXTENSION_GIF,
		EXTENSION_PNG,
		EXTENSION_GLB
	]
}
export function hasValidImageExtension(filename: string) {
	const extension = path.extname(filename);
	switch (extension) {
		case EXTENSION_GIF:
			return true
		case EXTENSION_GLB:
			return true
		case EXTENSION_PNG:
			return true
		default:
			return false
	}
}
