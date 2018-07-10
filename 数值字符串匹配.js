//s字符串
function isNumeric(s) {
    // write code here
    //返回与正则表达式查找内容匹配的第一个子字符串的位置。stringObj.search(rgExp)
    //? 0次或者1次 *任意次 +至少1次
    return s.search(/^[+-]?\d*(\.\d*)?$/) == 0 || s.search(/^[+-]?\d+(\.\d*)?[Ee]{1}[+-]?\d+$/) == 0;

}