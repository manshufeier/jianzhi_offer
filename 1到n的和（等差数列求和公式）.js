function Sum_Solution(n)
{
    // write code here
    // 等差数列求和：Sn=na1+n*(n-1)d/2,公式中首项为a1，末项为an，项数为n，公差为d，前n项和为Sn。
    // 首项和公差为1时Sn=n*(n+1)/2
    return (1+n)*n/2;
}