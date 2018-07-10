/*如果有符合条件的数字，则它出现的次数比其他所有数字出现的次数和还要多。
在遍历数组时保存两个值：一是数组中一个数字，一是次数。遍历下一个数字时，
若它与之前保存的数字相同，则次数加1，否则次数减1；若次数为0，
则保存下一个数字，并将次数置为1。遍历结束后，所保存的数字即为所求。
然后再判断它是否符合条件即可。*/
function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    let len = numbers.length;
    if(len === 0) return 0;
    let num = numbers[0];
    let count = 1;
    for(let i = 0; i < len; i++){
        if(num === numbers[i]){
            count++;
        } else {
            count--;
        }
        if(count === 0){
            num = numbers[i];
            count = 1;
        }
    }
    count = 0;
    for(let i = 0; i < len; i++){
        if(numbers[i] === num) count++;
    }
    if(count*2 > len) return num;
    return 0;
}