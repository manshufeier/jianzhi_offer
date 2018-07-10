function Fibonacci(n)
{
    // write code here
    //F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=2，n∈N*）
    if(n <= 1){
        return n;
    }else {
        var f0 = 0, f1 = 1;
        for(var i = 2; i <= n; i++){
            f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
        }
        return f2;
    }
}