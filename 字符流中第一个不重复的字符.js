//Init module if you need
var obj = {};

function Init() {
    // write code here
    obj = {};
}
//Insert one char from stringstream
function Insert(ch) {
    // write code here
    if (obj[ch]) {
        obj[ch] += 1;
    } else {
        obj[ch] = 1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
    // write code here
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (obj[i] == 1) {
                return i;
            }
        }
    }
    return '#';
}