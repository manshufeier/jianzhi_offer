function GetNumberOfK(data, k)
{
    // write code here
    let count = 0,
        len = data.length;
    if(len == 0){
        return 0;
    }
    for(let i = 0; i < len; i++){
        if(data[i] === k){
            count++;
        }
    }
    return count;
}