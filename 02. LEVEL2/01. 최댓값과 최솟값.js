function solution(s) {
    const arr = s.split(' ');
    let answer = Math.min(...arr) + ' ' + Math.max(...arr)
    return console.log(answer);
}
solution('1 2 3 4')