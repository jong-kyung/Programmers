function solution(n, arr1, arr2) {
    let answer = [];

    arr1.forEach((a, i) => {
        arr1[i] = a.toString(2)
        while (arr1[i].length !== n) {
            arr1[i] = 0 + arr1[i]
        }
    })

    arr2.forEach((a, i) => {
        arr2[i] = a.toString(2)
        while (arr2[i].length !== n) {
            arr2[i] = 0 + arr2[i]
        }
    })
    
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] === '0' && arr2[i][j] === '0') {
                str += ' ';
            } else str += '#';
        }
        answer.push(str);
    }
    console.log(answer);
    return answer;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])