import { join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    const file = join(fileURLToPath(import.meta.url), '../files', 'fileToCompress.txt');
    const archive = join(file, '../archive.gz');
    await pipeline(createReadStream(file), createGzip(), createWriteStream(archive));
};

await compress();