import { cpus } from 'os';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const core = cpus().length;
    const path = join(fileURLToPath(import.meta.url), '../worker.js');
    let number = 10;
    const workerPromise = () => new Promise(resolve => {
        new Worker(path, {workerData: number++})
            .on('message', value => resolve({
                status: 'resolved',
                data: value,
            }))
            .on('error', () => resolve({
                status: 'error',
                data: null,
            }));
    });
    // const workerResArr = [];
    // for (let i=0; i<core; i++) {
    //     workerResArr.push(workerPromise());
    // };
    const workerResArr = new Array(core).fill(null).map(() => workerPromise()); // так красиво!!!

    console.log(await Promise.all(workerResArr));
};

await performCalculations();