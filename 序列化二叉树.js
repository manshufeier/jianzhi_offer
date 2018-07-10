function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
/*
 1. 对于序列化：使用前序遍历，递归的将二叉树的值转化为字符，并且在每次二叉树的结点
不为空时，在转化val所得的字符之后添加一个' ， '作为分割。对于空节点则以 '#' 代替。
 2. 对于反序列化：按照前序顺序，递归的使用字符串中的字符创建一个二叉树(特别注意：
在递归时，递归函数的参数一定要是char ** ，这样才能保证每次递归后指向字符串的指针会
随着递归的进行而移动！！！)
*/
var arr = [];

function Serialize(pRoot) {
    // write code here
    if (pRoot === null) {
        arr.push('#');
    } else {
        arr.push(pRoot.val); //先序
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }

}

function Deserialize(s) {
    // write code here
    let node = null;
    if (arr.length < 1) {
        return null;
    }
    let number = arr.shift();
    if (typeof number === 'number') {
        node = new TreeNode(number); //先序
        node.left = Deserialize(arr);
        node.right = Deserialize(arr);
    }
    return node;
}