// 例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，
// 正确的句子应该是“I am a student.”。
function ReverseSentence(str)
{
    // write code here
    //reverse 方法返回一个元素顺序被反转的 Array 对象。 所以先把str转换成数组对象，反转后在转化成字符串
    return str.split(' ').reverse().join(' ');
}