/*1）由于我们要找的是和为S的连续正数序列，因此这个序列是个公差为1的等差数列，
而这个序列的中间值代表了平均值的大小。假设序列长度为n，
那么这个序列的中间值可以通过（S / n）得到，知道序列的中间值和长度，也就不难求出这段序列了。
2）满足条件的n分两种情况：
n为奇数时，序列中间的数正好是序列的平均值，所以条件为：(n & 1) == 1 && sum % n == 0；
n为偶数时，序列中间两个数的平均值是序列的平均值，而这个平均值的小数部分为0.5，
所以条件为：(sum % n) * 2 == n.
3）由题可知n >= 2，那么n的最大值是多少呢？我们完全可以将n从2到S全部遍历一次，
但是大部分遍历是不必要的。为了让n尽可能大，我们让序列从1开始，
根据等差数列的求和公式： S= (1 + n) * n / 2
*/
function FindContinuousSequence(sum) {
    var num = sum * 2,//sum = (1 + i) * i / 2，num=i*(i+1)
        sum1 = 0,
        result = [],
        start = 0,
        temp = [];
    for (var i = 2; i * (i + 1) <= num; i++) {
        sum1 = num / i;//i+1
        if (Math.round(sum1) == sum1) {//i+1为整数
            if (i % 2 == 0 && sum1 % 2 == 1) {
                start = (sum1 - i - 1) / 2;
                temp = [];
                for (var j = 1; j <= i; j++) {
                    temp.push(start + j);
                }
                result.unshift(temp);
            } else if (i % 2 == 1 && sum1 % 2 == 0) {
                start = (sum1 - i - 1) / 2;
                temp = [];
                for (var j = 1; j <= i; j++) {
                    temp.push(start + j);
                }
                result.unshift(temp);//将指定的元素插入数组开始位置并返回该数组
            }
        }
    }
    return result;
}