let input=document.querySelector("#input")
let btn=document.querySelector("button")
let country=document.querySelector(".country h5")

let message=document.querySelector(".message")
btn.addEventListener("click",async()=>{

  
  name=input.value
  input.value=""

  let url=`https://api.weatherapi.com/v1/current.json?key=6e2d22cad3e541db8e470121262904&q=${name}`;

  const respones=await fetch(url);
  const data=await respones.json();
  let temp=data.current.temp_c
  country.innerText=`Temperature in ${name} is : ${temp}+degree celcius`;

  message.innerText=""
  if (temp>30 && temp<=35){
    message.innerText=`The Weather is Dry Today in ${name}`
   let  img=document.createElement("img");
   img.src="clear.png";
   img.style.width="140px";
   message.appendChild(img);
  }

   else if(temp>10&& temp<=20){
    message.innerText=`Cloudy weather in ${name}`
    let img=document.createElement("img")
    img.src="clouds.png"
    img.style.width="130px"
     message.appendChild(img);
  }

   else if(temp<=10 && temp>=0){
    message.innerText=`Rainy weater in ${name}`
    let img=document.createElement("img")
    img.src="drizzle.png"
    img.style.width="130px"
     message.appendChild(img);
  }
    else if(temp>20 && temp<=30){
       message.innerText=`Weather is Humid ${name}`
     let img=document.createElement("img")
     img.src="humidity.png"
     img.style.width="130px"
      message.appendChild(img);
}
     
});

