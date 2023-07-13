function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]); // split() 메서드는 문자열 객체를 지정한 구분자를 이용하여 나눈 후 배열로 반환한다. split()으로 받는 인수가 문자열에 없다면, 원본 배열을 반환다.
        answer = arr.join(i) // 위 설명처럼 문자열인 answer는 split() 메서드로 쪼개진 후 배열로 반환된다. 쪼개지는 기준점이 된 인수 자리는 없어지기 때문에, 그 자리에 구분자로 매치되는 숫자를 넣은 후 다시 문자열로 반환한다.;
    }

    return console.log(Number(answer));
}
solution("one4seveneight")