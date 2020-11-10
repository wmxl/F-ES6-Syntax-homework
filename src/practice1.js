const parseData = input => {
    let output = [];
    for(const d of input.data){
        let obj = {};
        let i = 0;
        for(const c of input.column){
            obj[c["name"]] = d[i++];
        }
        output.push(obj);
    }
    return output;
}

export { parseData };