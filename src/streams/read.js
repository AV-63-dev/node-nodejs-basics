import { join } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const read = async () => {
    const path = join(fileURLToPath(import.meta.url), '../files', 'fileToRead.txt');
    createReadStream(path).pipe(process.stdout);
};

await read();