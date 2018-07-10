//方法一：slice
/*function LeftRotateString(str, n)
{
    // write code here
    if(str === null || str.length === 0){
        return "";
    }
    return str.slice(n).concat(str.slice(0, n));
}*/

//方法二旋转
function LeftRotateString(str, n)
{
    var len = str.length;
    if(len === 0 || n === 0){
        return str;
    }
    str = swap(str, 0, n - 1);
    str = swap(str, n, len - 1);
    str = swap(str, 0, len - 1);
    // return str;
    console.log(str);
}

function swap(s, start, end){
    let temp;
    let arr = s.split('');
    while(start < end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr.join('');
}
LeftRotateString("abcXYZdef", 3);