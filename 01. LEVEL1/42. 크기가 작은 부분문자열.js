function solution(t, p) {
    var answer = 0;
    for (i = 0; i < t.length - p.length; i++) {
        if (t.slice(i, i + p.length) <= Number(p)) {
            answer++;
        }
    }
    return console.log(answer)
}
solution("3141592", "271")