/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 大家的实现很多都是将每层的数据存进ArrayList中，偶数层时进行reverse操作，
 * 在海量数据时，这样效率太低了。
 * （我有一次面试，算法考的就是之字形打印二叉树，用了reverse，
 * 直接被鄙视了，面试官说海量数据时效率根本就不行。）
 *
 * 下面的实现：不必将每层的数据存进ArrayList中，偶数层时进行reverse操作，直接按打印顺序存入
 * 思路：利用Java中的LinkedList的底层实现是双向链表的特点。
 *     1)可用做队列,实现树的层次遍历
 *     2)可双向遍历,奇数层时从前向后遍历，偶数层时从后向前遍历
 */
function Print(pRoot)
{
    // write code here
    if(!pRoot){
        return [];
    }
    let result = [],
        queue = [],
        flag = true;
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
        if(!flag){
                tempArr.reverse();
            }
            flag = !flag;
            result.push(tempArr);
    }
    return result;
}