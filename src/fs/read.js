import { join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';

const read = async () => {
    const path = join(fileURLToPath(import.meta.url), '../files', 'fileToRead.txt');

    try {
        console.log( await readFile(path, 'utf8') );
    } catch {
        throw new Error('FS operation failed');
    };
};

await read();