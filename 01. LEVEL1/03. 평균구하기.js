function solution(arr) {
    var answer = 0;
    arr.forEach(function (a, i) {
        answer += a;
    })
    answer = answer / arr.length;
    return console.log(answer)
}
solution([1, 2, 3, 4])