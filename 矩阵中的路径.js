function hasPath(matrix, rows, cols, path) {
    // write code here
    if (path.length === 0) {
        return true;
    }
    if (rows * cols < path.length) {
        return false;
    }
    //初始化状态矩阵
    let state = [];
    for (let i = 0; i < rows; i++) {
        state.push([]);
        for (let j = 0; j < cols; j++) {
            state[i][j] = false;
        }
    }
    //找到第一个符合条件的字符
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i * cols + j] === path[0]) {
                if (path.length === 1) {
                    return true;
                }
                state[i][j] = true;
                if (find(matrix, rows, cols, i, j, path.slice(1), state)) {
                    return true;
                }
                state[i][j] = false;
            }
        }
    }
    return false;
}

function find(matrix, rows, cols, row, col, path, state) {
    //向上
    if (row > 0 && matrix[(row - 1) * cols + col] === path[0] && state[row - 1][col] === false) {
        if (path.length === 1) {
            return true;
        }
        state[row - 1][col] = true;
        if (find(matrix, rows, cols, row - 1, col, path.slice(1), state)) {
            return true;
        }
        state[row - 1][col] = false;
    }
    //向下
    if (row < rows - 1 && matrix[(row + 1) * cols + col] === path[0] && state[row + 1][col] === false) {
        if (path.length === 1) {
            return true;
        }
        state[row + 1][col] = true;
        if (find(matrix, rows, cols, row + 1, col, path.slice(1), state)) {
            return true;
        }
        state[row + 1][col] = false;
    }
    //向左
    if (col > 0 && matrix[row * cols + col - 1] === path[0] && state[row][col - 1] === false) {
        if (path.length === 1) {
            return true;
        }
        state[row][col - 1] = true;
        if (find(matrix, rows, cols, row, col - 1, path.slice(1), state)) {
            return true;
        }
        state[row][col - 1] = false;
    }
    //向右
    if (col < cols - 1 && matrix[row * cols + col + 1] === path[0] && state[row][col + 1] === false) {
        if (path.length === 1) {
            return true;
        }
        state[row][col + 1] = true;
        if (find(matrix, rows, cols, row, col + 1, path.slice(1), state)) {
            return true;
        }
        state[row][col + 1] = false;
    }
    return false;
}