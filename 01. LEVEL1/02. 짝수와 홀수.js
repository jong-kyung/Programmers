function solution(num) {
    var answer = '';
    if (num % 2 === 0) {
        answer = 'Even'
    } else {
        answer = 'Odd'
    }
    return console.log(answer)
}
solution(10)