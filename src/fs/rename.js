import { join } from 'path';
import { fileURLToPath } from 'url';
import { rename as renameFile, access, constants } from 'node:fs/promises';

const existFile = async path => {
    try {
        await access(path, constants.F_OK);
        return true;
    } catch {
        return false;
    };
};

const rename = async () => {
    const path = join(fileURLToPath(import.meta.url), '../files', 'wrongFilename.txt');
    const path_new = join(path, '../', 'properFilename.md');
    
    try {
        if (await existFile(path_new)) {
            throw new Error('FS operation failed');
        };
        await renameFile(path, path_new);
        console.log('Файл переименован 😁');
    } catch {
        throw new Error('FS operation failed');
    };
};

await rename();