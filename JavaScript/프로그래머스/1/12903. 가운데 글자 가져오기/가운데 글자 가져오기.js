function solution(s) {
    let answer = '';
    
    let length = s.length;
    let half = length / 2;
    
    if(length % 2 === 0){// 짝수면
        return s.substring(half - 1, half + 1);
    }else{
        return s.charAt(half);
    }
    
}