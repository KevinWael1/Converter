function Converter(Temp){
    Temp = parseFloat(Temp)
    document.getElementById("Output").innerHTML=(Temp-32)/1.8;
}

function Converter2(Temp2){
    Temp2 = parseFloat(Temp2)
    document.getElementById("Output2").innerHTML=(Temp2*9/5)+32;
}