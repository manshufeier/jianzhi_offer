//边界条件：
//数据上下 溢出
//空字符串
//只有正负号
//有无正负号
//错误标志输出
function StrToInt(str) {
    // write code here
    //使用字符串转换整数的库函数
    //return Number(str) ? parseInt(str) : 0;

    let flag = false; //判断输入是否合法
    let rgexp = /^\s+|\s+$/;
    if (str === null || rgexp.test(str)) {
        // return 0;
        console.log(0);
    }
    let symbol = 0; //区分是否为负数
    let start = 0; //标志第一位
    let sum = 0; //计算字符串和
    let result = 0;
    let arr = str.split('');
    if (arr[0] === "+") {
        start = 1;
    } else if (arr[0] === '-') {
        start = 1;
        symbol = 1;
    }
    for (let i = start; i < arr.length; i++) {
        if (arr[i] > '9' || arr[i] < '0') {
            flag = true;
            // return 0;
            console.log(0);
        }
        sum = result * 10 + parseInt(arr[i] - '0');
        if ((sum - parseInt(arr[i] - '0')) / 10 !== result) {
            flag = true;
            return 0;
        }
        result = result * 10 + parseInt(arr[i] - '0');
    }
    result = parseInt(Math.pow(-1, symbol) * result);
    // return result;
    console.log(result);
}
StrToInt("-123");