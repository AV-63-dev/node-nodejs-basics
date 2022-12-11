const parseEnv = () => {
    const object = process.env;
    const resArr = [];
    for (let key in object) {
        if (key.startsWith('RSS_')) resArr.push(`${key}=${object[key]}`);
    }
    console.log(resArr.join('; '));
};

parseEnv();