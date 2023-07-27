function solution(n) {
    var answer = 0;
    var iterA = 0, iterB = 1;
    for (let i = 2; i <= n; i++) {
        answer = iterA + iterB;
        iterA = iterB;
        iterB = answer
    }
    return console.log(answer);
}
solution(5)