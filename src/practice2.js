const inject = (items, sections) => {

    for(const e of sections){
        let now = e.index;
        for(const a of sections){
            if(a.index == now) break;
            if(a.index < e.index) now++;
        }
        items.splice(now, 0, e.content);
    }
    return items;
}
export { inject };