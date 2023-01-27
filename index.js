const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apikey="HtbiVrdXEhqZFnUtG57j3ZqF4HyDybwiPHGhsrAV";
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
}; 
btnEl.addEventListener("click",getJoke);

    async function getJoke(){ 
try {
    
    jokeEl.innerText="updating....";
    btnEl.innerText="loading..";
    btnEl.disabled=true; 
    const respose=await fetch(apiurl,options);
    const data=await respose.json();
    jokeEl.innerText=data[0].joke;
    btnEl.disabled=false;
    btnEl.innerText="Tell Me A joke"
} catch (error) {
    jokeEl.innerText="error occured";
}
        
    }
    
    

