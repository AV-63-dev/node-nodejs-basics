import { join } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const write = async () => {
    const path = join(fileURLToPath(import.meta.url), '../files', 'fileToWrite.txt');
    // process.stdin.pipe(createWriteStream(path)); // смотря что требуется
    process.stdin.pipe(createWriteStream(path, {flags: 'a'}));
};

await write();