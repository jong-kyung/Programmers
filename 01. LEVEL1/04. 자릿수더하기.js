function solution(n) {
    var answer = 0;
    var arr = (n + '').split('')
    console.log(arr)
    arr.forEach(function (a, i) {
        answer += parseInt(a);
    })
    return console.log((answer))
}
solution(987)