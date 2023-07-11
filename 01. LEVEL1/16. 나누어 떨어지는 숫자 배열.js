function solution(arr, divisor) {
    var answer = [];
    arr.forEach(function (a, i) {
        if (a % divisor == 0) {
            answer.push(a);
        }
    })
    return console.log(answer.sort(function (a, b) {
        return a - b;
    }))
}
solution([2, 36, 1, 3], 1)