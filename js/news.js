const apiKey = "fb051857391049a1a92e8aab63ca7126"
var url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`;


doucument.getElementById("#searchBtn").addEventListener('click', function() {
    let query = doucment.getElementById("#searchquery");
    var url = `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=${apiKey}`;
    var req = new Request(url);
    sendRequest(req);
});


function searchNews(req) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

                console.log(data.articles),


                    document.getElementById("news").innerHTML = data.articles.map(news =>

                        `
                    
                    <div class="col-md-6">
                    <div class="card h-100 pt-5" style="width:40rem;">
                    <img src="${news.urlToImage}" class="card-img-top"  alt="...">
                    <div class="card-body">
                      <h5 class="card-title"><a href="${news.url}">${news.title}</a></h5>
                      <p class="card-text">${news.description}</p>
                      <p class="card-text"><small class="text-muted">${news.publishedAt} | ${news.author} </small></p>
                      </div>
                  </div>
                  </div>
                  
                  `

                    ).join('')
            }

        );
}