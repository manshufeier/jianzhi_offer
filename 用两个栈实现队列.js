var stack1 = [],
    stack2 = [];

function push(node) {
    // write code here
    stack1.push(node);
}

function pop() {
    // write code here
    if (stack2.length === 0) {
        if (stack1.length === 0) {
            return null;
        } else {
            var len = stack1.length;
            for (var i = 0; i < len; i++) {
                stack2.push(stack1.pop());
            }
            return stack2.pop();
        }
    } else {
        return stack2.pop();
    }
}