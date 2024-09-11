import listParams from './listParams.json';

const arr = Object.entries(listParams).map(x => x);
const getParams = (name: string) => {
    for (const [k, v] of arr) {
        // console.log(v);
        if (k === name) {
            // return v;
            return [];
        }
        for (const [key, value] of Object.entries(v)) {
            if (key === name) {
                const result: string[] = [];
                result.push(key.toString().toLowerCase());
                const tmp = Object.entries(value);
                tmp.map(x => result.push(x[0].toString().toLowerCase()));
                return result;
            }
        }
    }
    return [];
};

export default getParams;
