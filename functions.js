

//fn for number operation//
const sdigits = document.querySelector("#sdigits");
const reverse = document.querySelector("#reverse");
const palindrome = document.querySelector("#palindrome");

const sumOfDigits = (num)=>{
    let s = 0;
    while(num != 0){
        s += (num % 10);
        num =  Number.parseInt(num / 10);
    }
    return s;
}
const reverseOfNumber = (num)=>{
    let rev = 0;
    while(num != 0){
        rev = rev * 10 + (num % 10);
        num =  Number.parseInt(num / 10);
    }
    return rev;
}
const checkPalindrome = (num)=>{
    return num == reverseOfNumber(num);
}

sdigits.addEventListener('click',(event)=>{
    let num = Number.parseInt(document.querySelector("#num").value);
    let res = sumOfDigits(num);
    document.querySelector("#result").innerHTML=`<div class='text-primary'> Digits sum of ${num} is :${res}`;
})

reverse.addEventListener('click',(event)=>{
    let num = Number.parseInt(document.querySelector("#num").value);
    let res = reverseOfNumber(num);
    document.querySelector("#result").innerHTML=`<div class='text-primary'> Reverse of ${num} is :${res}`;
})

palindrome.addEventListener('click',(event)=>{
    let num = Number.parseInt(document.querySelector("#num").value);
    let res = checkPalindrome(num);
    let str = "";
    if(res){
        str = `<div class='text-primary'> ${num} is a Palindrome`;
    }else{
        str = `<div class='text-danger'> ${num} is not a Palindrome`;
    }
    document.querySelector("#result").innerHTML= str;
})

//start for biggest number///
const btnBiggest = document.querySelector("#btnBiggest");


const biggestNumber = (num1)=>{
    let max=0;
    for(var i=0;i<num1.length;i++){
           if(Number.parseInt(num1[i])>max)
          {
              max=num1[i];
           }
        
       }
    return max;
    
     }


btnBiggest.addEventListener('click',(event)=>{
    let num1 = document.querySelector("#num1").value;
    let num1Arr = num1.split(",");
    num1Arr.sort(function(a, b) {return b-a});
    let biggest = num1Arr[0];
    let res = "";
    res = `<div class = 'text-primary'> ${biggest} is biggest number. </div>`
    document.querySelector("#result1").innerHTML = res;
})



//end for biggest number///


//start for prime number///
const btnPrime = document.querySelector("#btnPrime");

const primeFactorsTo = (num2)=>{
    let n=2;
    var arr=[];
    while(num2!=0)
    {
        let k=0;
        for(var i=2;i<=n/2;i++)
        {
            if(n%i==0)
            {
                k++;
                break;
            }
        }
        if(k==0)
        {
            arr.push(n);
            num2--;
        }
        n++;
    }
    return arr.join('<br>');
}


btnPrime.addEventListener('click',(event)=>{
    let num2 = document.querySelector("#num2").value;
    let res = primeFactorsTo(num2);
    document.querySelector("#result2").innerHTML=`<div class='text-primary'> Prime numbers from 0 to ${num2} are :${res}`;
})



/////
const biggest = document.querySelector("#btnBiggest");


