/*
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let str = numbers.join(''),
        len = str.length;
    for(let i = 0; i < len; i++){
        if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
            duplication[0] = str[i];
            return true
        }
    }
    return false;
}
*/
function duplicate(numbers, duplication)
{
    var length = numbers.length;
    var obj={};
    for(var i=0;i<length;i++){
        if(numbers[i] in obj){
            duplication[0]=numbers[i];
            return true;
        }else{
            obj[numbers[i]]=1;//只出现一次
        }
    }
    return false;
}
