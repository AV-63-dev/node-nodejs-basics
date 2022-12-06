import { join } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'node:fs/promises';

const list = async () => {
    const path = join(fileURLToPath(import.meta.url), '../files');

    try {
        console.log( await readdir(path) );
    } catch {
        throw new Error('FS operation failed');
    };
};

await list();