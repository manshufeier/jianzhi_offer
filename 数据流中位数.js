/*如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
那么中位数就是所有数值排序之后位于中间的数值。
如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
*/
var arr = [];
function Insert(num)
{
    // write code here
    arr.push(num);
    return arr;
}
function GetMedian(){
	// write code here'
    arr.sort();
    let len = arr.length;
    let mid = parseInt(len/2);
    if((len % 2 === 0)){//偶数个
        let node1 = arr[mid - 1],
            node2 = arr[mid];
        return (node1+node2)/2;
    }else{
        return arr[mid];//奇数个
    }
}