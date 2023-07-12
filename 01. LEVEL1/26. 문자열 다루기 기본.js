 function solution(s) {
            var answer = true;
            [...s].forEach((a, i) => {
                if (isNaN(a)) { // isNaN() : 숫자인지 아닌지 확인
                    answer = false;
                } else {
                    true
                }
            })
            return console.log(answer)
        }
        solution("a234")