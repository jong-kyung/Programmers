function solution(s) {
    var answer = '';
    let word = s.split(' ')
    answer = word.map((a) => {
        return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    })

    answer = answer.join(' ')
    return answer
}
solution("3people unFollowed me")