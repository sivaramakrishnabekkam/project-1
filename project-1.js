/*!-- Fahrenheit(°F)=(Celsius(°C)×9/5)+32;
Formula: Kelvin (K) = Celsius (°C) + 273.15
Formula: Rankine (°R) = (Celsius (°C) × 9/5) + 491.67
Formula: Réaumur (°Re) = Celsius (°C) × 4/5
Formula: Celsius (°C) = (Fahrenheit (°F) - 32) × 5/9
Formula: Kelvin (K) = Celsius (°C) + 273.15
Formula: Rankine (°R) = Fahrenheit (°F) + 459.67
Formula: Réaumur (°Re) = (Fahrenheit (°F) - 32) × 5/9 × 4/5
Formula: Celsius (°C) = Kelvin (K) - 273.15
Formula: Fahrenheit (°F) = (Celsius (°C) × 9/5) + 32
Formula: Rankine (°R) = Kelvin (K) × 9/5
Formula: Réaumur (°Re) = (Kelvin (K) - 273.15) × 4/5
c 0-100--40
f 32-212--40
k 273-373-233 */
 var tem=document.getElementById("temp");
var te1=document.getElementById("t1");
var te2=document.getElementById("t2");

function celsius(){
var tempature=tem.value.trim();
if(tempature<-40 || tempature>100 || tempature==0 || tempature==""){
    te1.innerHTML="";
    te2.innerHTML="";
    
    alert("enter tempature less than 100 and greater than -40\n don't enter zero\n and enter some value")
   
}
else{
var f=(tempature * 9/5)+32;
var k=parseFloat(tempature) + 273;
te1.innerHTML="FAHRENHEIT:"+f.toFixed(2);;
te2.innerHTML="KELVIN:"+k.toFixed(2);;
}}
function fahrenheit(){
    var tempature=tem.value.trim();if(tempature<-40 || tempature>212 || tempature==0 || tempature==""){
        te1.innerHTML="";
        te2.innerHTML="";
        
        alert("enter tempature less than 212 and greater than -40\n don't enter zero\n and enter some value")
       document.getElementById("animation").style.animation=siva;
    }
    else{

    var c=(tempature -32)/1.8;
    var k=c+273;
    te1.innerHTML="CELSIUS :"+c.toFixed(2);
    te2.innerHTML="KELVIN:"+k.toFixed(2);
    }}
    function kelvin(){
        var tempature=tem.value.trim();
        if(tempature<233 || tempature>373 || tempature==0 || tempature==""){
            te1.innerHTML="";
            te2.innerHTML="";
            
            alert("enter tempature less than 373 and greater than 233\n don't enter zero\n and enter some value")
           
        }
        else{
        var c=tempature - 273;
        var f=(c*9/5)+32;
        te1.innerHTML="CELSIUS:"+c.toFixed(2);
        te2.innerHTML="FAHRENHEIT:"+f.toFixed(2);
        }}
        function reset(){
            te1.innerHTML="";
            te2.innerHTML="";
            
            tem.value="";

        }
        
