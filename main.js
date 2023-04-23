const h1=document.querySelector("h1");
const input1=document.querySelector("#calculo1");
const input2=document.querySelector("#calculo2");
const btn=document.querySelector("#btnCalcular");
const btn1=document.querySelector("#btnCalcular1")
const presult=document.querySelector("#result")

function btnOnClick(){
    let suma=Number(input1.value) + Number(input2.value)
    presult.innerText="Resultado: "+suma;
}

function btnOnClick1(){
    let resta=Number(input1.value) - Number(input2.value)
    presult.innerText="Resultado: "+resta;
}

btn1.addEventListener("click",btnOnClick1);