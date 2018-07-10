function ListNode(x) {
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead) {
    // write code here
    let newHead = new ListNode('head'); //新链表存储非重复节点
    newHead.next = pHead;
    let oHead = newHead,
        qHead = oHead.next; //操作旧链表，指向第一个节点
    while (qHead) {
        while ((qHead.next !== null) && (qHead.val === qHead.next.val)) {
            //重复节点
            qHead = qHead.next; //跳过一个重复节点
        }
        if (oHead.next === qHead) {
            oHead = qHead; //复制非重复节点到新链表中
            qHead = qHead.next;
        } else {
            qHead = qHead.next; //跳过重复节点
            oHead.next = qHead;
        }
    }
    return newHead.next;
}