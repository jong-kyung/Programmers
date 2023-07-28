function solution(s) {
    var answer = true;
    if (s.charAt(0) == '(' && s.charAt(s.length - 1) == ')') {
        answer = true
    } else {
        answer = false
    }
    return answer
}
solution("()()")