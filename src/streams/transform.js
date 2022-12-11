import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const transformStreams = new Transform({
        transform(chunk, encoding, callback){
            // const chunkString = chunk.toString();
            const chunkString = chunk.toString().trim();
            // this.push(chunkString.split('').reverse().join('') + '\n');
            // callback();
            callback(null, chunkString.split('').reverse().join('') + '\n');
        }
    });
    await pipeline(process.stdin, transformStreams, process.stdout);
};

await transform();