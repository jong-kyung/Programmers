function solution(n) {
    var answer = [];
    answer.push((n + '').split('').map(Number).reverse())
    //split : 문자 쪼개기 / map : 콜백함수를 이용해 요소들의 값 변경
    return console.log(answer)
}
solution(12345)