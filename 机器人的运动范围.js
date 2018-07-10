function movingCount(threshold, rows, cols) {
    // write code here
    let visited = []; //表示节点是否访问过
    for (let i = 0; i < rows; i++) {
        visited.push([]);
        for (let j = 0; j < cols; j++) { //状态数组初始化
            visited[i][j] = false;
        }
    }
    return moveCount(threshold, rows, cols, 0, 0, visited);
}

function moveCount(threshold, rows, cols, row, col, visited) {
    if (row < 0 || row === rows || col < 0 || col === cols || visited[row][col]) {
        return 0;
    }
    let sum = 0,
        temp = row + '' + col; //数字和字符串拼接成字符串
    for (let i = 0; i < temp.length; i++) {
        sum += temp.charAt(i) / 1; //字符串与数字进行算术运算后弱转化为数字类型
    }
    if (sum > threshold) {
        return 0;
    }
    visited[row][col] = true;
    return 1 + moveCount(threshold, rows, cols, row - 1, col, visited) + moveCount(threshold, rows, cols, row + 1, col, visited) +
        moveCount(threshold, rows, cols, row, col - 1, visited) + moveCount(threshold, rows, cols, row, col + 1, visited);
}