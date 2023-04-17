let dataArray=[];
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
    for(let i in data){
      dataArray.push(data[i]);
    }
  })

async function randomCarouselNumberGen(){
  await promise;
  if(carouselArray.length<=2){
    const rndNum=Math.floor(Math.random()*dataArray.length);
    if(!carouselArray.includes(rndNum)&&rndNum>=0){
    carouselArray.push(rndNum);
    }
    randomCarouselNumberGen();
    }
  }
  randomCarouselNumberGen();     

  async function getarraypos(){
    await promise;
    console.log(dataArray[1].name);
  }
  getarraypos();
   
console.log(dataArray);  
console.log(carouselArray);  


const welcomesecT=document.querySelector(".welcome-section");
const crsl=document.querySelector(".carousel");
crsl.prepend(welcomesecT);


const carouselImgs=document.querySelectorAll(".carousel-img");
console.log(carouselImgs)
async function imageNnameGenerator(){
  await randomCarouselNumberGen();
  let j=0;
  for(let bag of carouselImgs){
    bag.setAttribute("src", dataArray[carouselArray[j]].imageURL)
    j++;
  }
}
imageNnameGenerator();

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
})