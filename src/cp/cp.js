import { join } from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const path = join(fileURLToPath(import.meta.url), '../files', 'script.js');

    // для выполнения задания достаточно строки ниже
    // fork(path, args);
    
    // чтоб раскрыть общение между master/child процессами делаю так
    const childProcess = fork(path, args, {silent: true});
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};
// spawnChildProcess();
spawnChildProcess(['someArgument1', 'someArgument2']);
