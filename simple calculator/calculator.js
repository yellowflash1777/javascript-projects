function calculator() {
  expression=document.getElementById("expression").value;
  console.log(expression);
document.getElementById("expression").value=eval(expression);
console.log('answer',eval(expression));
}