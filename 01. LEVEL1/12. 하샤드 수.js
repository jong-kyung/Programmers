function solution(x) {
    var answer = true;
    var num = x.toString().split("");
    var result = 0;
    num.forEach(function (a, i) {
        result += Number(a)
    })
    
    if (x % result === 0) {
        answer = true
    } else {
        answer = false;
    }
    return console.log(answer)
}
solution(13)