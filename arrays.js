
///start for crud operation////
let names = ["Krish","Manoj","Rajesh"];

let resultDiv = document.querySelector("#resultDiv");
let textName = document.querySelector("#name");

const deleteUser = (name)=>{
    names = names.filter(ele => ele !== name);
    showResult();
}
const indexOf = (name)=>{
      for(let i=0;i<=names.length;i++){
          if(names[i]=== name){
              return i;
          }
      }
      return -1;
}

let index = -1;
const editUser = (name)=>{
    index = indexOf(name);
    textName.value = name;
}

textName.addEventListener('keyup',(event)=>{
    if(event.key === "Enter"){
       let textField =  document.querySelector("#name");
       let name = textField.value;
       if(name.trim().length > 0 && index == -1){
           names.push(name);
       }else{
           names[index] = name;
           index = -1;
       }
       showResult();
       textField.value="";
    }
})

const showResult = ()=>{
    let data = "<ul class='list-group'>";
    for(let name of names){
        data += `<li class="list-group-item">${name} 
        <i class="fa fa-edit  float-right mr-2" onClick=editUser('${name}') ></i>
        <i class="fa fa-trash float-right mr-2" onClick=deleteUser('${name}')></i>
        </li>`
    }
    data +="</ul>";
    resultDiv.innerHTML = data;
}

showResult();



/////end for crud operaion/////

let names1 = [];

let resultDiv1 = document.querySelector("#resultDiv1");
let textName1 = document.querySelector("#name1");

const deleteUser1 = (name1)=>{
    names1 = names1.filter(ele => ele !== name1);
    showResult1();
}


textName1.addEventListener('keyup',(event)=>{
    if(event.key === "Enter"){
       let textField =  document.querySelector("#name1");
       let name1 = textField.value;
       if(name1.trim().length > 0 && index == -1){
           names1.push(name1);
       }
       showResult1();
       textField.value="";
    }
})


const showResult1 = ()=>{
    let data = "<ul class='list-group'>";
    for(let name1 of names1){
        data += `<li class="list-group-item">${name1} 
        
        <i class="fa fa-trash float-right mr-2" onClick=deleteUser1('${name1}')></i>
        </li>`
    }
    data +="</ul>";
    resultDiv1.innerHTML = data;
}



// showResult1();