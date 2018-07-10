function PrintMinNumber(numbers)
{
    // write code here
    numbers.sort(compare);
    var result = "";
    for(var i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    // return result;
    console.log(result);
}

function compare(a, b){
    var str1 = a + "" + b;
    var str2 = b + "" + a;
    for(var i = 0; i < str1.length; i++){
        if(str1.charAt(i) > str2.charAt(i)){
            return 1;
        }
        if(str1.charAt(i) < str2.charAt(i)){
            return -1;
        }
    }
    return 1;
}
PrintMinNumber([3, 32, 321]);
