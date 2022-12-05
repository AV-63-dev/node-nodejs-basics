import { access, constants, writeFile } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url'

const create = async () => {
    const file = join(fileURLToPath(import.meta.url), '../files', 'fresh.txt');

    access(file, constants.F_OK, err_task => {
        if (err_task) {
            writeFile(file, 'I am fresh and young', err => { 
                if (err) throw err;
                console.log('Файл создан 😁');
            });
        } else {
            throw new Error('FS operation failed');
        };
    });
};

await create();