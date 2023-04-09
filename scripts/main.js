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


/* Randomizing carousel items */

  for(let i=1;i<=6;i++){
    const slideSelector=document.querySelector()
  }
