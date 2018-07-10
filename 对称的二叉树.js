/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//二叉树是否对称，只要采用前序、中序、后序、层次遍历等任何一种遍历方法，分为先左后右和先
//右后左两种方法，只要两次结果相等就说明这棵树是一颗对称二叉树。

/*思路：首先根节点以及其左右子树，左子树的左子树和右子树的右子树相同
* 左子树的右子树和右子树的左子树相同即可，采用递归
* 非递归也可，采用栈或队列存取各级子树根节点
*/
function isSymmetrical(pRoot)
{
    // write code here
    if(pRoot === null){
        return true;
    }
    return fn(pRoot.left, pRoot.right);
}

function fn(root1, root2){
    if(root1 === null && root2 === null){
        return true;
    }
    if(root1 !== null && root2 !== null){
        return root1.val === root2.val && fn(root1.left, root2.right) && fn(root1.right, root2.left);
    }
    return false;
}