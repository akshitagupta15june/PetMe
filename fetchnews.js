const fetchNews = () => {
    let news = document.getElementById("news")
    const date = new Date().toLocaleDateString('en-GB').replaceAll('/', '-');

    fetch(`https://newsapi.org/v2/everything?q=animals&from=${date}&sortBy=pubelemsshedAt&apiKey=e3fe942d46614084b3257ed2930d9d77`)
        .then((response) => response.json())
        .then((data) => {

            if (data.status != "ok"){
                let elems = document.createElement("div");
                elems.innerText = "Error Fetching News; Server ERROR 404";
                elems.style = "color: white;margin: 3rem;font-weight: bold;font-family: ui-sans-serif;padding: 1.5rem;text-aelemsgn: justify;background-color: rgb(141 97 82 / 38%);border-radius: 1rem;"
                news.appendChild(elems);
            }
            else{
                for (let i = 0; i < data.articles.length; i++) { 
                    let elems = document.createElement("div");
                    elems.innerText = data.articles[i].description;
                    elems.style = "color: white;margin: 3rem;font-weight: bold;font-family: ui-sans-serif;padding: 1.5rem;text-aelemsgn: justify;background-color: rgb(141 97 82 / 38%);border-radius: 1rem;"
                    news.appendChild(elems);
                }
            }
        });
};
fetchNews()