function solution(N, stages) {
    let answer = [];
    let 총인원 = stages.length;

    for (let i = 1; i <= N + 1; i++) {
        스테이지수 = stages.filter((number) => {
            return number === i
        }).length;
        answer.push([i, 스테이지수 / 총인원])
        총인원 -= 스테이지수
    }
    answer.pop();
    answer = answer.sort((a, b) => { return b[1] - a[1] })
    answer = answer.map((a => a[0]))
    return console.log(answer);
}
solution(5, [2, 1, 2, 6, 2, 4, 3, 3])