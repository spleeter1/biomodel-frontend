import listParams from './listParams.json';

const DataArr = () => {
    let x: String[] = [];
    Object.entries(listParams).flatMap(([k, v]) => {
        x.push(k);
        Object.entries(v).map(([key]) => {
            x.push(key);
        });
    });
    return x;
};
export default DataArr;
