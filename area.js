var base=document.querySelector("#baseoftriangle")
var height=document.querySelector("#heightoftriangle")
var check=document.querySelector("#buto")
var text=document.querySelector(".textmessage")
check.addEventListener("click",function calculate(){

    if(Number(base.value)==0||Number(height.value)==0)
    {
        text.innerText="Enter the  proper values"
    }
    else{
        const sum=(Number(base.value)*Number(height.value))/2;
        text.innerText="Area of traiangle is : "+sum;
    }
    
    })
