/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    // write code here
    if(!pRoot){
        return 0;
    }
    let left =1 + TreeDepth(pRoot.left),
        right = 1 + TreeDepth(pRoot.right);
    return Math.max(left, right);
}