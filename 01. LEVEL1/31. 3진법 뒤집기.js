function solution(n) {
    var answer = 0;
    let reversed_N = n.toString(3).split('').reverse().join('');
    // toString : 인수를 넣으면 진법을 나타낼 수 있음
    answer = parseInt(reversed_N, 3) // parseInt():전달 받은 문자열을 전달 받은 radix로 분석한 정수를 반환
    return console.log(answer);
}
solution(45)