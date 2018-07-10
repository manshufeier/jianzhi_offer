/*输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
要求不能创建任何新的结点，只能调整树中结点指针的指向。*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree) {
    // write code here
    if (!pRootOfTree) {
        return null;
    }
    var arr = [],
        len = 0;
    SubConvert(pRootOfTree, arr);
    //设置结点的后继和前驱指针
    len = arr.length;
    arr[0].left = null;//第一个结点没有前驱，最后一个结点没有后继，特别处理
    arr[0].right = arr[1];
    for (var i = 1; i < len - 1; i++) {
        arr[i].left = arr[i - 1];
        arr[i].right = arr[i + 1];
    }
    arr[len - 1].left = arr[len - 2];
    arr[len - 1].right = null;
    return arr[0];

}

function SubConvert(node, arr) {
    if (!node) {
        return null;
    }
    //将二叉树按中序遍历存储在数组中
    SubConvert(node.left, arr);
    arr.push(node);
    SubConvert(node.right, arr);
}