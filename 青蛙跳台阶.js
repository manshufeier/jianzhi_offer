/*一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。*/
function jumpFloor(number) {
    // write code here
    if (number <= 2) {
        return number;
    }

    var one = 1,
        two = 2,
        num = 0;
    for (var i = 3; i <= number; i++) {
        num = one + two;
        one = two;
        two = num;
    }
    return num;
}