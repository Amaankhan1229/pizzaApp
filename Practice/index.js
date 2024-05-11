let togglebtn=document.querySelector("#button");
let currentmode="light";

togglebtn.addEventListener("click",()=>{
    if(currentmode=="light")
        {
            document.querySelector("body").style.backgroundColor="black";
            currentmode="dark";
        }
     else{
        document.querySelector("body").style.backgroundColor="white";
        currentmode="light";

     }   
     console.log(currentmode);

    
})
