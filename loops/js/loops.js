function printTable(){
// here we grab the number which user enters
var number = document.getElementById('number').value;

var table = document.getElementById('table');
table.innerHTML=""; 

for(var i = 1 ; i<=10;i++){

    var row = table.insertRow();
    var col1 = row.insertCell();
    var col2 = row.insertCell();

    var product = i * number;

    col1.innerHTML= number + " x " + i + " = " ;
    col2.innerHTML=product;

}

}