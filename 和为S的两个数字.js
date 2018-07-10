function FindNumbersWithSum(array, sum)
{
    // write code here
    //已排好序，左右夹逼
    let index,
        result = [];
    for(let i = 0; i < array.length - 1 && array[i] < sum/2; i++){
        index = array.indexOf(sum - array[i], i + 1);//strObj.indexOf(subString[, startIndex])
        if(index != -1){
            return [array[i], array[index]];//隔得最远的乘积最小
        }
    }
    return result;//不存在返回空
}