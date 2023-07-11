function solution(a, b) {
    var answer = 0;
    a.forEach((s, i) => {
        answer += a[i] * b[i]
    })
    return console.log(answer)
}
solution([-1, 0, 1], [1, 0, -1])