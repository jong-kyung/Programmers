function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count;
}

function solution(left, right) {
    let answer = 0;
    for (let num = left; num <= right; num++) {
        const divisors = countDivisors(num);
        if (divisors % 2 === 0) {
            answer += num;
        } else {
            answer -= num;
        }
    }
    return console.log(answer);
}
solution(13, 17)