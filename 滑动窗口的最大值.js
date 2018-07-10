function maxInWindows(num, size)
{
    // write code here
    if(size == 0){
        return [];
    }
    let count = num.length - size + 1;//窗口个数
    let result = [];
    for(let i = 0; i < count; i++){
        let temp = num.slice(i, i + size);//slice为数组和字符串都有的方法
        result.push(Math.max.apply(this, temp));
    }
    return result;
}