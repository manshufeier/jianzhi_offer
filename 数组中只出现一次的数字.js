function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let arr = [],
        len = array.length;
    for(let i = 0; i < len; i++){
        if(array.indexOf(array[i]) === array.lastIndexOf(array[i])){
            arr.push(array[i]);
        }
    }
    return arr;
}