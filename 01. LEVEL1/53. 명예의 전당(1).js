function solution(k, score) {
    var answer = [];
    let 명예의전당 = [];
    //score 값 > 명예의 전당 값 => 명예의 전당 등록


    score.forEach((a, i) => {
        명예의전당.push(a)
        //명예의 전당 값이 k보다 클경우 없애기
        let 최소 = 명예의전당.indexOf(Math.min(...명예의전당))
        if (명예의전당.length > k) {
            명예의전당.splice(최소, 1)
        }
        answer.push(Math.min(...명예의전당))
    })
    return console.log(answer);
}
solution(3, [10, 100, 20, 150, 1, 100, 200])