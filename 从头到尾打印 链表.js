/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    let arr = [];
    let me = head;
    while(me){
        arr.push(me.val);
        me = me.next;
    }
         return arr.reverse();
}