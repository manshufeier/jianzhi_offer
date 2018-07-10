 /*题目：
  *输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
  *如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
  */
 function VerifySquenceOfBST(sequence) {
     if (!sequence.length) {
         return false;
     }
     return adjustSquence(sequence, 0, sequence.length - 1);

 }
 //左子树一定比右子树小，因此去掉根后，数字分为left，right两部分，right部分的
 //最后一个数字是右子树的根他也比左子树所有值大
 function adjustSquence(sequence, start, end) {
     if (start >= end) {
         return true;
     }
     var i = start;
     //找到右子树的第一个节点
     while (i < end && sequence[i] < sequence[end]) {
         i++;
     }
     for (var j = i; j < end; j++) {
         if (sequence[j] < sequence[end]) {
             return false;
         }
     }
     return adjustSquence(sequence, start, i - 1) && adjustSquence(sequence, i, end - 1)
 }