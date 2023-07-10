function solution(a, b) {
    var answer = 0;
    var arr = [];
    if (a == b) {
        answer = a;
    }
    else if (a > b) {
        for (let i = b; i < a + 1; i++) {
            arr.push(i)
        }
    }
    else if (a < b) {
        for (let i = a; i < b + 1; i++) {
            arr.push(i)
        }
    }
    arr.forEach(function (a, i) {
        answer += a;
    })
    console.log(answer)
}
solution(3, 5)