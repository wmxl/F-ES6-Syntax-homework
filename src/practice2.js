const inject = (items, sections) => {
    const output = items;

    for(const e of sections){
        let now = e.index;
        for(const a of sections){
            if(a.index < e.index){
                now++;
            }
            if(e.index == a.index) break;
        }

        items.splice(now, 0, e.content);

    }
    return output;
}
export { inject };