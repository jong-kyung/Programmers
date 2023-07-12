function solution(arr1, arr2) {
    var answer = [[]];
    // console.log(arr1[0][0] + arr2[0][0])
    // console.log(arr1[0][1] + arr2[0][1])
    // console.log(arr1[1][0] + arr2[1][0])
    // console.log(arr1[1][1] + arr2[1][1])
    for (var i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for (var j = 0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return console.log(answer);
}
solution([[1, 2], [2, 3]], [[3, 4], [5, 6]])