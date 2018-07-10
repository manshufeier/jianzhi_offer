/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    var arr = [];
    var data = [];
    if(root != null){
        arr.push(root);
    }
    while(arr.length != 0){
        var node = arr.shift();
        if(node.left != null){
            arr.push(node.left);
        }
        if(node.right != null){
            arr.push(node.right);
        }
        data.push(node.val);
    }
    return data;
}