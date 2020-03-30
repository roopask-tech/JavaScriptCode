let sum = document.querySelector("#sum");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");

function getResult(ope){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    if(ope === "+"){
        return `${num1} ${ope} ${num2} is ${num1  + num2}`;
    }else if(ope === "-"){
        return `${num1} ${ope} ${num2} is ${num1  - num2}`;
    }else{
        return `${num1} ${ope} ${num2} is ${num1  * num2}`;
    }
   
}
sum.addEventListener('click',(event)=>{
    event.preventDefault();
    let res = getResult("+")
    document.querySelector("#result").value = res;
})

sub.addEventListener('click',(event)=>{
    event.preventDefault();
    let res = getResult("-")
    document.querySelector("#result").value = res;
   
})

mul.addEventListener('click',(event)=>{
    event.preventDefault();
    let res = getResult("*")
    document.querySelector("#result").value = res;

})



function showmin()
{
    var num1=document.getElementById("hours").value
    var num2=num1*60;
    document.getElementById("result2").value=num2+" "+"Minutes"

}

function showsec()
{ 
    var num1=document.getElementById("hours").value
    var num2=num1*60*60;
    document.getElementById("result2").value=num2+" "+"Seconds"

}
