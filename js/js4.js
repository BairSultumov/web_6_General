//prompt("Ваше число",1)
var arr=Array(10)
for(var i=0;i<10;i++){
arr[i]=prompt("Введите число в массив ("+(i+1)+")",i+1)
document.write(arr[i]+" ")
}