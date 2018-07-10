/*输入一个链表，反转链表后，输出新链表的表头。*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // write code here
    var arr = [];
    var node = pHead;
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    node = pHead;
    while (node !== null) {
        node.val = arr.pop();
        node = node.next;
    }
    return pHead;
}