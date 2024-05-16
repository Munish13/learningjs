factorial(n){
    //code here
    if(n === 0 || n===1){
        return 1;
    }
        else{
          for(let i = n-1; i>=1; i--){
            n*= i;
        }  
        }
        
        return n;
}