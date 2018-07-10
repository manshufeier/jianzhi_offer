function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var counts,num;
    counts = 0;
    if(n < 1){
        return 0;
    }
    for(var i = 1;i <= n;i++){
        num = i;
       //num = num%10;
        while(num > 0){
            if(num%10 == 1){//个位
                counts++;
            }
            num = Math.floor(num/10);//十位，而其他也是10的倍数加多个1
        }
    }
    // return counts;
    console.log(counts);
}
NumberOf1Between1AndN_Solution(11)
