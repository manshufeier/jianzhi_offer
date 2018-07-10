/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
var isBalanced = true;

function IsBalanced_Solution(pRoot) {
    // write code here
    if (pRoot == null) {
        return true;
    }
    IsBalanced(pRoot);
    var result = isBalanced;
    isBalanced = true;
    return result;
}

function IsBalanced(root) {
    if (root == null) {
        return 0;
    }
    let left = 0,
        right = 0;
    if (root.left) {
        left = IsBalanced(root.left);
    }
    if (root.right) {
        right = IsBalanced(root.right);
    }
    if (Math.abs(left - right) > 1) {
        isBalanced = false;
    }
    return left > right ? left + 1 : right + 1;

}