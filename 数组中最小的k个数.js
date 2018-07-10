function GetLeastNumbers_Solution(input, k)
{
    // write code here
    var result = input.sort(function(a,b){
        return a-b;
    });
    return result.length >= k ? result.slice(0,k) : [];
}