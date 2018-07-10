function InversePairs(data)
{
    // write code here
    let length=data.length;
    if(length<=1 || data == null){
        return 0;
    }
    let arr=[];
    let count=c(data,arr,0,length-1);
    return count;
}
function c(target,arr,init,l){
    if(l == init){
        return 0;
    }
    let mid=Math.floor((init+l)/2);
    let leftcount=c(target,arr,init,mid)%1000000007;
    let rightcount=c(target,arr,mid+1,l)%1000000007;
    let i=mid,count=0,j=l,k=l;
    while(i>=init && j>mid){
        if(target[i]>target[j]){
            count+=j-mid;
            arr[k--]=target[i--];
            if(count>=1000000007){
                count%=1000000007;
            }
        }else{
            arr[k--]=target[j--];
        }
    }
    while(i>=init){
        arr[k--]=target[i--];
    }
    while(j>mid){
        arr[k--]=target[j--];
    }
    for(let m=init;m<=l;m++){
        target[m]=arr[m];
    }
    return (leftcount+rightcount+count)%1000000007;
}