/*max 记录 最大值
min 记录  最小值
min ,max 都不记0
满足条件 1 max - min <5
        2 除0外没有重复的数字(牌)
        3 数组长度 为5*/

/*
function IsContinuous(numbers)
{
    // write code here
    let times = [-5];
    for(let i = 0; i < 13; i++){
        times.push(0);
    }
    let len = numbers.length;
    if(len != 5){
        return false;
    }
    let min = 14,
        max = -1;
    for(let i = 0; i < len; i++){
        times[numbers[i]]++;
        if(numbers[i] == 0){
            continue;
        }
        if(times[numbers[i]] > 1){//除0外不可重复
            return false;
        }
        if(numbers[i] > max){
            max = numbers[i];
        }
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    return max - min < 5;//最大值和最小值间隔小于5
}
*/

/*
1、排序
2、计算所有相邻数字间隔总数
3、计算0的个数
4、如果2、3相等，就是顺子
5、如果出现对子，则不是顺子
*/
function IsContinuous(numbers) {
    let numOfZero = 0,
        numOfInterval = 0,
        len = numbers.length;
    if (len == 0) {
        return false;
    }
    numbers.sort(); //排序
    for (let i = 0; i < len - 1; i++) {
        if (numbers[i] == 0) {
            numOfZero++;
            continue; //直接进入下一次迭代，0不计算间隔且可重复
        }
        if (numbers[i] == numbers[i + 1]) {
            return false; //不能有对子
        }
        numOfInterval += numbers[i + 1] - numbers[i] - 1;
    }
    return numOfZero >= numOfInterval;
}