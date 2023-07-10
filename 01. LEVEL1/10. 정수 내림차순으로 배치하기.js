function solution(n) {
    var answer = 0;
    answer = Number(n.toString().split("").sort(function (a, b) {
        return b - a;
    }).join("")) //join() => 배열의 원소를 문자열로 합치기,split() => 문자열을 배열로 바꾸기
    return console.log(answer)
}
solution(118372);