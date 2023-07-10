var count = 0;
function solution(s) {
    var answer = true;
    var p개수 = s.match(/p|P+/gi).length;
    var y개수 = s.match(/y|Y+/gi).length;
    if (p개수 == y개수) {
        answer = true;
    } else {
        answer = false;
    }
    return console.log(answer);
}
solution('pPoooyY')