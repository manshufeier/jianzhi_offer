function LastRemaining_Solution(n, m)
{
    // write code here
    //求胜利者的编号。我们知道第一个人(编号一定是m%n-1) 出列之后，剩下的n-1个人组成了一个新      的约瑟夫环
    //递推公式
    //f[1]=0;f[i]=(f[i-1]+m)%i;  (i>1)
    //最终结果的原编号：x'=(x+k)%n。
    if(n == 0){
        return -1;
    }
    if(n == 1){
        return 0;
    } else {
        return (LastRemaining_Solution(n-1, m) + m) % n;
    }

}