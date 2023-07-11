function solution(n) {
    answer = '';
    answer = "수박".repeat(n).substring(0, n)
    //repeat : string을 반복한 값을 반환,substring : 매개변수로 잘라내고 싶은 문자열의 start index와 last index를 전달
    console.log(answer)
}
solution(3)