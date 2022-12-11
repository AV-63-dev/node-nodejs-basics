import { join } from 'path';
import { fileURLToPath } from 'url';
import { readdir, mkdir, copyFile } from 'node:fs/promises';

const copy = async () => {
    const path = join(fileURLToPath(import.meta.url), '../files');
    const path_copy = join(fileURLToPath(import.meta.url), '../files_copy');
    // const path_copy = new URL('./files_copy', import.meta.url); //TODO можно и так, но при сборке конечных в файлах join (или resolve) не хотят верно с этим работать (см. console.log(path_copy))

    try {
        const files = await readdir(path);
        await mkdir(path_copy);
        for (const file of files) {
            await copyFile(join(path, file), join(path_copy, file));
        };
        console.log('Папка скопирована 😁');
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();

// fs.exists - DEPRECATED