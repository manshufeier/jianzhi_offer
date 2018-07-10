/*题目：
 *输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 *路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    var result = [];
    if(root == null){
        return result;
    }
    dspFind(root, expectNumber, [], 0, result);
    return result;
}

function dspFind(root, expectNumber, path, currentNum, result){
    currentNum += root.val;
    path.push(root.val);
    if(currentNum == expectNumber && root.left == null && root.right == null){
        result.push(path.slice(0));
    }
    if(root.left != null){
        dspFind(root.left, expectNumber, path, currentNum, result);
    }
    if(root.right != null){
        dspFind(root.right, expectNumber, path, currentNum, result);
    }
    path.pop();//回退
}
