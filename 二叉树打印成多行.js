/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
     if(!pRoot){
        return [];
    }
    let result = [],
        queue = [];
    queue.push(pRoot);
    while(queue.length){
        let len = queue.length,//队列先进先出
            tempArr = [];
        for(let i = 0; i < len; i++){
            let temp = queue.shift();//移除数组中的第一个元素并返回该元素。
            tempArr.push(temp.val);//缓存每层的数
            if(temp.left){
                queue.push(temp.left);
            }
            if(temp.right){
                queue.push(temp.right);
            }
        }
        result.push(tempArr);
    }
    return result;
}