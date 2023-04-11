/* let dataArray=[];
const carouselArray=[];
     
async function getResponse(){
  try{
    const response=await fetch("/json/recipes.json");
    if(!response.ok){
      throw new Error(`Error:${response.status}`);
    }
    const data=await response.json();
    return data;
  }  
  catch(error){
    console.error("Could not get products!")
  }
};
const promise=getResponse();
promise.then((data)=>{
    for(let i=0;i<=data.length-1;i++){
    dataArray.push(data[i]);
    }}
  ) 

async function randomCarouselNumberGen(){
  await promise;
  if(carouselArray.length<=5){
    const rndNum=Math.floor(Math.random()*dataArray.length);
    if(!carouselArray.includes(rndNum)&&rndNum>=0){
    carouselArray.push(rndNum);
    }
    randomCarouselNumberGen();
    }
  }     
randomCarouselNumberGen();
   
console.log(dataArray);  
console.log(carouselArray);  


let data=JSON.parse(dataArray);
console.log(data);
let frImg=document.querySelectorAll(".main-car-img");
frImg.forEach((element) =>{   
  console.log(dataArray);
    element.setAttribute("src",dataArray[carouselArray[j]].imageURL);
    j++;
});
 */

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})