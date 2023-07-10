function solution(n) {
    var answer = 0;
    var x = Math.sqrt(n) // 제곱근 구하는 메소드
    if (Number.isInteger(x)) { // 정수인지 판별하는 메소드 정수면 true를 반환
        answer= Math.pow(x + 1, 2);
    } else {
        answer= -1;
    }
    return console.log(answer)
}
solution(3)