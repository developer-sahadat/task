
let letterGradNumber=parseFloat(prompt("Enter Your Grad Number"));

if(letterGradNumber>=101 || letterGradNumber==0){
   // console.log("Your code is incorrect");
   document.write("Your code is incorrect")
}

else if(letterGradNumber<=100 && letterGradNumber>=80){
// console.log("A+");
document.write("<h2>Alia A+ 😍</h2>")
}
else if(letterGradNumber<=79 && letterGradNumber>=70){
// console.log("A");
document.write("<h2>Dalia A 😊</h2>")
}
else if(letterGradNumber<=69 && letterGradNumber>=60){
// console.log("A-");
document.write("<h2>Salia A- 😚</h2>")

}
else if(letterGradNumber<=59 && letterGradNumber>=50){
// console.log("B");
document.write("<h2>Malia B 😌</h2>")

}
else if(letterGradNumber<=49 && letterGradNumber>=40){
// console.log("C");
document.write("<h2>Lili  C 😏</h2>")

}
else if(letterGradNumber<=39 && letterGradNumber>=33){
// console.log("D");
document.write("<h2>Jalaia D 😱</h2>")

}
else{
   // console.log("F");
   document.write("<h2> Shahadat F 😉 😎</h2>")
}

