function solution(numbers) {
    var answer = [];
    var arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j])
        }
    }
    arr2 = new Set(arr.sort((a, b) => {
        return a - b
    }))
    answer = [...arr2]
    return console.log(answer)
}
solution([2, 1, 3, 4, 1])