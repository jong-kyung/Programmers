function solution(arr) {
    var answer = [];
    answer = arr.filter((val, index) => val != arr[index + 1]);
    return console.log(answer)
}
solution([1, 1, 3, 3, 0, 1, 1])