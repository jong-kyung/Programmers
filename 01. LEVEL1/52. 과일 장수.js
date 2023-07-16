function solution(k, m, score) {
    //k 점이 최상품 사과, 1점이 최하품 사과
    //한 상자에 m개씩 담아서 포장
    //상자에 담긴 사과 중 낮은 점수 : p , 사과 가격 : p*m
    // 사과가 남을 경우 버림. 최대한 많이 팔았을때 최대 이익을 계산하고자함
    var answer = 0;

    // 사과를 나눠 담는 방식 : 큰 값부터 차례대로 넣음
    score.sort((a, b) => { return a - b })

    //m개씩 쪼개서 어레이에 담기
    while (score.length >= m) {
        let 상자 = score.splice(score.length - m, m)
        answer += m * 상자[0]
    }
    return console.log(answer);
}
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])