def solution(n, start=1, mid=2, end=3):
    if n == 1:
        answer = [[start, end]]
        return answer
    else:
        return solution(n-1, start, end, mid) + [[start, end]] + solution(n-1, mid, start, end)
 