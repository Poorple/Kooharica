const secT = document.querySelector('.cal');

let rnd=sessionStorage.getItem("key");
console.log(rnd);

const fetchJSONinstructions=fetch("/json/recipes.json");
fetchJSONinstructions
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Bed buraz. Problem je:${response.status}`);
        }
        return response.json();
    })
    .then((data)=>{
        data.forEach(post=>{
            if(post.name==rnd){
                const myArticle = document.createElement('article');
                const sectInstructions=document.createElement("section");

                const myImg=document.createElement("img");
                const myH2 = document.createElement('h2');
                const myH3 = document.createElement('h3');
                const myH3a = document.createElement('h3');
                const myH3b = document.createElement('h3');
                const mySteps = document.createElement('ol');
                const myIngredients=document.createElement("ul");

                for(let i=0;i<=post.ingredients.length-1;i++){
                    let ingredientsliElem=document.createElement("li");
                    ingredientsliElem.textContent=`${post.ingredients[i].quantity} of ${post.ingredients[i].name}` ;
                    myIngredients.appendChild(ingredientsliElem);
                }
                for(let i=0;i<=post.steps.length-1;i++){
                    let stepsliElem=document.createElement("li");
                    stepsliElem.textContent=post.steps[i];
                    mySteps.appendChild(stepsliElem);
                }
                console.log(post.steps);
                myH2.textContent=post.name;
                myH3a.textContent="Ingredients";
                myH3b.textContent="Preparation";

                let sum=0;
                for(let i=0;i<=post.timers.length-1;i++){
                    sum+=post.timers[i];
                }
                myH3.textContent=`Total prep time: ${sum} minutes.`;                
                myImg.setAttribute("src", post.imageURL);

                /* myArticle.appendChild(myH2); */
                myArticle.appendChild(myImg);
                sectInstructions.appendChild(myH2);
                sectInstructions.appendChild(myH3);
                sectInstructions.appendChild(myH3a);
                sectInstructions.appendChild(myIngredients);
                sectInstructions.appendChild(myH3b);
                sectInstructions.appendChild(mySteps);

                secT.appendChild(myArticle);
                secT.appendChild(sectInstructions);
            }
        })
    })
    .catch((error)=>{
        console.error(`Teski fail braco:${error}`);
    });