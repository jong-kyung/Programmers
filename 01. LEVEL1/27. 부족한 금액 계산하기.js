function solution(price, money, count) {
    var answer = -1;
    var result = 0;
    for (let i = 0; i <= count; i++) {
        result += (price * i)
    }
    
    if (money == result) {
        answer = 0;
    } else {
        answer = Math.abs(money - result) // Math.abs() 절댓값 구하기
    }
    return console.log(answer)
}
solution(3, 20, 4)