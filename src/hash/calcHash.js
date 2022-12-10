import { join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const path = join(fileURLToPath(import.meta.url), '../files', 'fileToCalculateHashFor.txt');
    const file = await readFile(path);
    const hash = createHash('sha256');
    hash.update(file);
    console.log(hash.digest('hex'));
};

await calculateHash();