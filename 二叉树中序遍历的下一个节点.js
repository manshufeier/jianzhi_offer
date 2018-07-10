/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
    // write code here
    if (pNode === null) { //空指针
        return null;
    }
    if (pNode.right) { //如果右子树不为空，则找右子树的最左节点
        pNode = pNode.right;
        while (pNode.left !== null) {
            pNode = pNode.left;
        }
        return pNode;
    }
    while (pNode.next) { //没有右子树，则找第一个当前节点是父节点左孩子的节点
        if (pNode.next.left === pNode) {
            return pNode.next;
        }
        pNode = pNode.next;
    }
    return null; //到根节点也没找到
}