<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>짝수와 홀수</title>
</head>

<body>
    <script>
        function solution(num) {
            var answer = '';
            if (num % 2 === 0) {
                answer = 'Even'
            } else {
                answer = 'Odd'
            }
            return console.log(answer)
        }
        solution(10)
    </script>
</body>

</html>