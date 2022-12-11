const parseArgs = () => {
    const argsArr = process.argv.slice(2);
    const resArr = [];
    argsArr.forEach((item, index, arr) => {
        if (item.startsWith('--')) resArr.push(item.slice(2) + ' is ' + arr[index + 1]);
    });
    console.log(resArr.join(', '));
};

parseArgs();