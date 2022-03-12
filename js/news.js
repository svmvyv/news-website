const apiKey = "fb051857391049a1a92e8aab63ca7126"

let url = `https://newsapi.org/v2/everything?q=coronavirus&from=2022-03-11&sortBy=popularity&apiKey=${apiKey}`


fetch(url)
    .then(response => response.json())
    .then(data =>

        console.log(data.articles),

        document.querySelector("headlineNews").innerHTML = data.articles.map


    );