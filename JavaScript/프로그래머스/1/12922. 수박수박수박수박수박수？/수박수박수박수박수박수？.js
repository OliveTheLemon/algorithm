function solution(n) {
    let answer = "";
    const watermelon = "수박";
    console.log();
    answer = watermelon.repeat(n / 2);
    
    if(n % 2 === 1){ // 홀수면
        answer += "수";
    }
    return answer;
}