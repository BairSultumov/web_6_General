var ran=Math.round(Math.random()*100)
var user=prompt("Угадайте число",ran);
document.write("'Угадайте число' <"+user+">")
while(user!=ran){
if(user<ran){
    user=prompt("Больше")
    document.write("'Больше' ")
}
else if(user>ran){
    user=prompt("Меньше")
    document.write("'Меньше' ")
}
else{
    user=alert("Угадали")
    document.write("'Угадали' ")
}
document.write("<"+user+"><br>")
}
