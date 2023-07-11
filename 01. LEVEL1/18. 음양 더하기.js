// true = + false = -
        function solution(absolutes, signs) {
            var answer = 0;
            signs.forEach(function (a, i) {
                if (signs[i] == true) {
                    absolutes[i] = Number(absolutes[i])
                } else {
                    absolutes[i] = -Number(absolutes[i])
                }
            })

            absolutes.forEach(function (a, i) {
                answer += a;
            })
            return console.log(answer)
        }

        solution([1, 2, 3], [false, false, true])