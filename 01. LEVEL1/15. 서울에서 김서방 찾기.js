function solution(seoul) {
    var answer = '';
    var x = seoul.findIndex(
        function (element) {
            return element == "Kim"
        }
    );
    answer = `김서방은 ${x}에 있다.`
    return console.log(answer);
}
solution(["Jane", "Kim"])
