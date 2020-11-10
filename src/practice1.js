const parseData = input => {
    let output = [];
    for(const d of input.data){
        let obj = {};
        obj.name = d[0];
        obj.age = d[1];
        obj.gender = d[2];
        obj.birthday = d[3];
        output.push(obj);
    }
    return output;
}
export { parseData };