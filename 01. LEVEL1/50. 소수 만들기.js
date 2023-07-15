function solution(nums) {
    let answer = 0;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer++;
            }
        }
    }
    return console.log(answer);
}

function isPrime(sum) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // sum > i
    for (let i = 2; i < sum; i++) {
        if (sum % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
            return false;
        }
    }
    // 소수는 1보다 큰 정수임으로
    // 1보다 작으면 false를 리턴한다
    return sum > 1;
}
solution([1, 2, 7, 6, 4])