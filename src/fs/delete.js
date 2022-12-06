import { join } from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'node:fs/promises';

const remove = async () => {
    const path = join(fileURLToPath(import.meta.url), '../files', 'fileToRemove.txt');

    try {
        await rm(path);
        console.log('Файл удален 😁');
    } catch {
        throw new Error('FS operation failed');
    };
};

await remove();