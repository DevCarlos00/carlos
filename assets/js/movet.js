

const container = document.querySelectorAll(".container .card2");
const sneaker2 = document.querySelector(".sneaker2 img");
const card2 = document.querySelector(".card2");
const l2    = document.querySelector(".l2");
const purchase2 =document.querySelector("purchase2");
const buttoncard =document.querySelector("buttoncard");

        container.forEach(el => {
            el.addEventListener("mousemove",(e)=> {
                let xAxis = (window.innerWidth/2-e.pageX)/45
                let yAxis = (window.innerHeight/2-e.pageY)/45
                el.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });
        })
        //Animacion de entrada 
        container.forEach(el => {
            el.addEventListener('mousemove',(e)=>{
                el.style.transition =`all 0.5s ease`
                el.style.animation =`animacion 1.5s forwards`
                el.querySelector(".title2").style.transform ="translate(0px) rotate(0deg)"
                el.querySelector(".sneaker2 img").style.transform="translateZ(10px) rotateZ(20deg)"   
                el.querySelector(".l2").style.transform="translate(0px)"  
                el.querySelector(".purchase2").style.transform="translate(0px)"  
                el.querySelector(".buttoncard").style.transform="translateZ(150px) rotateZ(30deg)"

            })





            

        })
        //Animacion de salida 
        container.forEach(el => {
            el.addEventListener('mouseleave',(e)=>{
                el.style.transition =`all 1.5s ease`
                el.style.animation =`none`


                el.style.transform =`rotateY(10deg) rotateX(0deg)`
                el.querySelector(".title2").style.transform ="translate(0px) rotate(0deg)"
                el.querySelector(".sneaker2 img").style.transform="translate(0px) rotate(0deg)"
                el.querySelector(".purchase2").style.transform="translate(0px) rotate(0deg)" 
                el.querySelector(".buttoncard").style.transform="translate(0px) rotate(0deg)" 

            })
        })







