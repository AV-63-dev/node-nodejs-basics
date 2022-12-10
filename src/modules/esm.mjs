import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

// определю __filename, __dirname, require - тело кода можно оставить на CommonJS, кроме экспорта - и все ОК
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const random = Math.random();

// но тут есть место для динамического импорта https://learn.javascript.ru/modules-dynamic-imports
const unknownObjectPath = random > 0.5 ? './files/a.json' : './files/b.json';
let unknownObject = await import(unknownObjectPath, {assert: {type: 'json'}});

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {unknownObject, myServer};