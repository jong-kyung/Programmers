function solution(s) {
    var answer = '';
    var result = '';
    result = [...s].sort((a, b) => {
        let upperCaseA = a.toUpperCase();
        let upperCaseB = b.toUpperCase();

        if (upperCaseA > upperCaseB) return 1;
        if (upperCaseA < upperCaseB) return -1;
        if (upperCaseA === upperCaseB) return 0;
    })
    result.forEach((a, i) => {
        answer += a
    })
    return console.log(answer)
}
solution("Zbcdefg")