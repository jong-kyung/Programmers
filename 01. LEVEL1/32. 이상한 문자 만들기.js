function solution(s) {
    var answer = '';
    var arr = [...s];
    var newArr = [];
    arr.forEach((a, i) => {
        if (i % 2 == 0) {
            newArr.push(arr[i].toUpperCase())
        }else {
            newArr.push(arr[i])
        }
    });
    answer = newArr.join("")
    return console.log(answer)
}
solution('try hello world')