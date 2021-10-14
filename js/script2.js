var arr = ['1.jpg', '2.jpg', '3.jfif'];
var res = prompt("Выберите картинку", 1);
if (res != '')
    document.write(res + "<br><img src='image/" + arr[res - 1] + "'>");

else
    alert("Ты пидор");