function solution(sizes) {
    let answer = 0;
    sizes.forEach((v, idx) => {
        sizes[idx] = v.sort((a, b) => a - b);
    }); // sizes내부 배열들 분류

    const left = sizes.map((v) => v[0]);
    const right = sizes.map((v) => v[1]);
    answer = Math.max(...left) * Math.max(...right);
    return console.log(answer);
}
solution([[60, 50], [30, 70], [60, 30], [80, 40]])