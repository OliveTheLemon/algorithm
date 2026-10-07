function solution(numbers) {
    //let answer = 1+2+3+4+5+6+7+8+9;
    let answer = 9*(1+9)/2;
    
    numbers.forEach((num, idx)=>{
      answer -= num;  
    });
    return answer;
}