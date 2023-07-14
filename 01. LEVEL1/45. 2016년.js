function solution(a, b) {
    var answer = '';
    var 날짜 = new Date(2016, a - 1, b),
        요일;
    // console.log(날짜)
    switch (날짜.getDay()) {
        case 0: day = "SUN"; break;
        case 1: day = "MON"; break;
        case 2: day = "TUE"; break;
        case 3: day = "WED"; break;
        case 4: day = "THU"; break;
        case 5: day = "FRI"; break;
        default: day = "SAT";
    }
    answer = day;
    return console.log(answer);
}
solution(5, 24)