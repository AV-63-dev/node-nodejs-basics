import { join } from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    const file = join(fileURLToPath(import.meta.url), '../files', 'fileToCompress.txt');
    const archive = join(file, '../archive.gz');
    await pipeline(createReadStream(archive), createUnzip(), createWriteStream(file));
};

await decompress();