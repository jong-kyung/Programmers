function solution(x, n) {
    var answer = [];
    var x씩증가 = 0;
    for (let i = 0; i < n; i++) {
        x씩증가 += x;
        answer.push(x씩증가);
    }
    return console.log(answer)
}
solution(2, 5)