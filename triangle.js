var a1=document.querySelector("#angle1")
var a2=document.querySelector("#angle2")
var a3=document.querySelector("#angle3")
var check=document.querySelector("#buto")
var text=document.querySelector(".textmessage")
var ch1=(a1.value).includes("")
var ch2=(a2.value).includes("")
var ch3=(a3.value).includes("")

check.addEventListener("click",function checktriangle()
{
   if((Number(a1.value)<=0||Number(a2.value)<=0||Number(a3.value)<=0)||(Number(a1.value)>=180||Number(a2.value)>=180||Number(a3.value)>=180))
   {
    text.innerText="An angle cannot be less than equal to zero or greater than equal to 180."
   }
else
{
var sum=Number(a1.value)+Number(a2.value)+Number(a3.value);

if(sum==180)
{
    text.innerText="Hurray! the angles you entered forms a triangle."
}
else{
    text.innerText="Alas! the angles don't form a triangle"
}

}
});