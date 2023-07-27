function solution(brown, yellow) {
    var answer = [];
    let yel = []
    for (let i = 0; i < yellow; i++) {
        if (yellow % i === 0) {
            yel.push(i)
        }
    }
    console.log(yel)
    //노랑이를 소인수분해
    return answer;
}
solution(24, 24)
// brown 10 yellow 2 => [4,3] [가로크기,세로크기]