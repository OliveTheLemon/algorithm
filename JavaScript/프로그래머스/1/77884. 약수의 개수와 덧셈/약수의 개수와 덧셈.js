function isSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}

function solution(left, right) {
    // 제곱수만 약수가 홀수개
    let answer = 0;
    
    for(let i = left; i<= right; i++){
        if(isSquare(i))
            answer -= i;
        else
            answer += i;
    }
    return answer;
}