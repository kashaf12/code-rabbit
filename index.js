class N {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }

    bfsTrav() {
        let res = [];
        let q = [];
        
        if (this.head === null) {
            return res;
        }
        
        q.push(this.head);
        
        while (q.length > 0) {
            let cur = q.shift();
            res.push(cur.val);
            
            if (cur.next !== null) {
                q.push(cur.next);
            }
        }
        
        return res;
    }
}
