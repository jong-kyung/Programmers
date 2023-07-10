function solution(s) {
    var answer = 0;
    if (s >= 5 && s <= 1) {
        answer = Number(s);
    }
    else {
        return false;
    }
    return console.log(answer)
}
solution("1234")