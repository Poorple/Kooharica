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
promise.then((data)=>console.log(data));

async function randomCarouselNumberGen(){
  await promise;
  const rndNum=Math.floor(Math.random()*data.length-1);
  console.log(rndNum);
  if(!carouselArray.includes(rndNum)){
    carouselArray.push(rndNum);
    }
  }
      
randomCarouselNumberGen();
   
console.log(dataArray);  