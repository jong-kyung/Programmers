function solution(food) {
    var answer = '';
    // 첫번째 어레이는 0 이고 중앙에, 만약 갯수가 홀수면 한개는 버려짐.
    // 
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            answer += i
            console.log(i)
        }
    }
    let 반대 = [...answer].reverse().join('')
    // console.log(반대)
    answer = String(answer + 0 + 반대)
    return console.log(answer);
}
solution([1, 7, 1, 2])