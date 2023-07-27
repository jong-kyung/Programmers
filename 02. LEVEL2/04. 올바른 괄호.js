function solution(s) {
    var answer = true;
    console.log(s.charAt(s.length - 1))
    if (s.charAt(0) == '(' && s.charAt(s.length - 1) == ')') {
        answer = true
    } else {
        answer = false
    }
    return console.log(answer);
}
solution("()()")