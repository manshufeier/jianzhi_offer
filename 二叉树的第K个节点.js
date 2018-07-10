/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//思路：二叉搜索树按照中序遍历的顺序打印出来正好就是排序好的顺序。
//     所以，按照中序遍历顺序找到第k个结点就是结果。
function KthNode(pRoot, k) {
    // write code here
    if (k <= 0) {
        return null;
    }
    let count = 0; //计数器
    function Knode(pRoot, k) {
        if (pRoot !== null) {
            let node = Knode(pRoot.left, k); //中序先遍历左子树
            if (node !== null) {
                return node;
            }
            count++;
            if (count === k) {
                return pRoot; //根节点即为第k个
            }
            node = Knode(pRoot.right, k); //中序遍历右子树
            if (node !== null) {
                return node;
            }
        }
        return null;
    }
    return Knode(pRoot, k);
}