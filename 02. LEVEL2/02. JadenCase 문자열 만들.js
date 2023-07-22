function solution(s) {
    var answer = '';
    let 문자 = s.split(' ')
    answer = 문자.map((a) => {
        return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    })

    //charAt() => 파라미터번째의 문자를 읽어 냄.
    return console.log(answer);
}
solution("3people unFollowed me")