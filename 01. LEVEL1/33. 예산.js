function solution(d, budget) {
    var answer = 0,
        sum = 0;

    d.sort((a, b) => a - b); // 오름차순 정렬

    for (let i = 0; i < d.length; i++) {
        answer++;
        sum += d[i]

        if (sum > budget)
            answer--;
    }

    return console.log(answer);
}
solution([1, 3, 2, 5, 4], 9)