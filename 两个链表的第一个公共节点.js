/*function ListNode(x){//单向链表
    this.val = x;
    this.next = null;
}
用两个指针扫描”两个链表“，最终两个指针到达 null 或者到达公共结点。
以上是蛮力遍历，如果两个链表有公共结点，则第一个公共点的next指针指向同一个节点，
之后所有的结点都是重合的，不会再出现分叉，拓扑是个y型，可以先找奥较长的链表，看多出几个结点，
然后先遍历较长链表几步，再遍历第二个链表找共同点，时间复杂度为O(m+n)
还可利用哈希表特性，将其中一个链表加入哈希表，然后利用containsKey方法看哈希表中是否含有另一个链表的结点
*/
/*蛮力方法*/
/*
function FindFirstCommonNode(pHead1, pHead2)
{
    var p1=pHead1;
    var p2=pHead2;
    while(p1!=p2){
        p1=p1==null?pHead2:p1.next;
        p2=p2==null?pHead1:p2.next;
    }
    return p1;//共同点
}
*/
function FindFirstCommonNode(pHead1, pHead2) {
    var p1 = pHead1;
    var p2 = pHead2;
    if (pHead1 === null || pHead2 === null) {
        return null;
    }
    var length1 = getLength(pHead1),
        length2 = getLength(pHead2);

    if (length1 > length2) {
        var len = length1 - length2;
        while (len > 0) {
            p1 = p1.next;
            len--;
        }
    } else if (length2 > length1) {
        var len = length2 - length1;
        while (len > 0) {
            p2 = p2.next;
        }
    }

    while (p1 != p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1; //共同点
}

function getLength(pHead) {
    var length = 0;
    currentNode = pHead;
    while (currentNode !== null) {
        length++;
        currentNode = currentNode.next;
    }
    return length;
}