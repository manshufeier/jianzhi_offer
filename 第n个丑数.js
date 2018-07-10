function GetUglyNumber_Solution(index) {
    // write code here
    //指包含因子2,3,5的正整数被称作丑数，比如4,10,12都是丑数，而7,23,111则不是丑数，另外1也是丑数。
    //首先除2，直到不能整除为止，然后除5到不能整除为止，然后除3直到不能整除为止。
    //最终判断剩余的数字是否为1，如果是1则为丑数，否则不是丑数。
    if (index == 0) {
        return 0
    }
    var ugly = [1];
    var two = 0,
        three = 0,
        five = 0;
    for (var i = 1; i < index; i++) {
        ugly[i] = Math.min(ugly[two] * 2, ugly[three] * 3, ugly[five] * 5);
        if (ugly[i] === ugly[two] * 2) {
            two++;
        }
        if (ugly[i] === ugly[three] * 3) {
            three++;
        }
        if (ugly[i] === ugly[five] * 5) {
            five++;
        }
    }
    return ugly[index - 1];
}