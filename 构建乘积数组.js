function multiply(array) {
    // write code here
    //filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
    //和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入的函数依次作用于每个元素，
    //然后根据返回值是true还是false决定保留还是丢弃该元素。
    //map原数组被“映射”成对应新数组。
    let len = array.length,
        result = [];
    if (array === null || len === 0) {
        return result;
    }
    for (let i = 0; i < len; i++) {
        let tempArr = array.filter(function(val, idx) {
            return idx != i;
        });
        let temp = 1;
        tempArr.map(function(val) {
            temp *= val
        });
        result[i] = temp;
    }
    return result;
}