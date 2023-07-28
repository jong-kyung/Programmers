function solution(n, words) {
    let order, count;
    for (let i = 1; i < words.length; i++) {
        const curWord = words[i];
        if (words.indexOf(curWord) !== i) { // 이미 사용한 단어인지 확인
            order = i % n + 1
            count = Math.floor(i / n) + 1
            return [order, count];
        }

        const brfore_word = words[i - 1].slice(-1);
        const next_word = curWord.charAt(0);
        if (brfore_word !== next_word) {
            order = i % n + 1
            count = Math.floor(i / n) + 1
            return [order, count];
        }
    }

    return [0, 0];
}

solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]) // [3,3]

// solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]) // [0,0]

// solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]) // [1,3]
