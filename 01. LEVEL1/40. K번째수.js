function solution(array, commands) {
    let answer = [];

    for (m = 0; m < commands.length; m++) {
        let [i, j, k] = commands[m];
        let arr = [];
        arr = array.slice(i - 1, j)
        arr.sort()
        answer.push(arr[k - 1])
    }
    return console.log(answer)
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])
//splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.

//slice() 메소드는 begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본 배열은 수정되지 않는다.