function solution(phone_number) {
    var answer = '';
    for (i = 0; i < phone_number.length - 4; i++) {
        answer += '*'
    }
    var 뒷자리 = phone_number.slice(phone_number.length - 4, phone_number.length)
    return console.log(answer + 뒷자리);
}
solution("01033334444")