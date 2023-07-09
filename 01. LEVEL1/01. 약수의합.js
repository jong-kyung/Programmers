function solution(num) {
    var answer = 0;
    var arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) { arr.push(i) }
    }
    arr.forEach(function (a, i) {
        answer += a
    })
    return console.log(answer);
}
solution(12);