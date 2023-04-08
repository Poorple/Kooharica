const secT = document.querySelector('.cal');

const fetchJSONrecipes=fetch("/json/recipes.json");
fetchJSONrecipes
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Bed buraz. Problem je:${response.status}`);
        }
        return response.json();
    })
    .then((data)=>{
        data.forEach(post=>{
            const myArticle = document.createElement('article');
            const myH2 = document.createElement('h2');
            const myPara1 = document.createElement('p');
            const myImg=document.createElement("img");
            myH2.textContent=post.name;
            let sum=0;
            for(let i=0;i<=post.timers.length-1;i++){
            sum+=post.timers[i];
            }
            myPara1.textContent = `Total prep time: ${sum} minutes.`;
            myImg.setAttribute("src", post.imageURL);

            myArticle.addEventListener("click",()=>{
                sessionStorage.setItem("key",myH2.textContent)
                window.location="/recipe-directions.html"
            });

            myArticle.appendChild(myImg);
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            secT.appendChild(myArticle);
        })
    })
    .catch((error)=>{
        console.error(`Teski fail braco:${error}`);
    });