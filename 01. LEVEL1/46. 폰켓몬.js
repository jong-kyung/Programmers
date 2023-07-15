function solution(nums) {
    //nums /2 마리의 포켓몬을 가져갈 수 있음.
    let answer = [...new Set(nums)],
        limit = nums.length / 2;
    return answer.length > limit ? console.log(limit) : console.log(answer.length)
}
solution([3, 1, 2, 3])
