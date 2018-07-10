/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    // write code here
    var arr = [],
        currentNode = head;
    if (head === null) {
        return false;
    }
    while (currentNode !== null) {
        arr.push(currentNode);
        currentNode = currentNode.next;
    }
    return arr[arr.length - k];
}