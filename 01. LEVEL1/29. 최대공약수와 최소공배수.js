function solution(n, m) {
    var answer = [];
    let gcd = 0,
        lcm = 1;

    for (let i = 2; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % 2 === 0) {
            gcd = i;
        }
    } // 최대 공약수 구하기

    while (true) {
        if (lcm % n == 0 && lcm % m == 0) {
            break;
        }
        lcm++;
    } // 최소 공배수 구하기
    
    answer.push(gcd)
    answer.push(lcm)
    return console.log(answer)
}
solution(3, 12)