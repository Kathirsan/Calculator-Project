function add(){
let n1= parseFloat(document.getElementById("input1").value);
let n2= parseFloat(document.getElementById("input2").value);
document.getElementById("result").innerHTML="Result: "+(n1+n2);
}
function subtract(){
let n1=parseFloat(document.getElementById("input1").value);
let n2=parseFloat(document.getElementById("input2").value);
document.getElementById("result").innerHTML="Result: "+(n1-n2);
}
function multiply(){
let n1= parseFloat(document.getElementById("input1").value);
let n2= parseFloat(document.getElementById("input2").value);
document.getElementById("result").innerHTML="Result: "+(n1*n2);
}
function divide(){
let n1= parseFloat(document.getElementById("input1").value);
let n2= parseFloat(document.getElementById("input2").value);
if(n2==0){
    document.getElementById("result").innerHTML="Infinity"
}else{
document.getElementById("result").innerHTML="Result: "+(n1/n2);
}
}