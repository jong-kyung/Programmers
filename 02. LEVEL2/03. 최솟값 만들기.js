function solution(A, B) {
    var answer = 0;
    let arr1 = A.sort((a, b) => {
        return a - b
    })

    let arr2 = B.sort((a, b) => {
        return b - a
    })

    for (let i = 0; i < A.length; i++) {
        answer += arr1[i] * arr2[i]
    }
    return console.log(answer);
}
solution([1, 2], [3, 4])