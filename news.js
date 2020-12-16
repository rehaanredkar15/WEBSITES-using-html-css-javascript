

console.log("welcome to console programmer");

let source = 'bbc-news';
let apiKey = '188b7b104e76459d902e753f0b6c4dcd';  

let Newsaccordion = document.getElementById('Newsaccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);


xhr.onload = function(){

    if(this.status == 200)
    {
       let json = JSON.parse(this.responseText);
       let articles = json.articles;
       console.log(articles);
       let newshtml = ""; //this is the html where are html created in news will be inserted
       articles.forEach(function(element,index) {
           let news = `<div class="accordion-item">
                              <h2 class="accordion-header" id="flush-heading${index}">
                                  <button class="accordion-button " type="button" data-bs-toggle="collapse"
                                      data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                                    <b>  Breaking News ${index+1}</b> ${element["title"]}
                                  </button>
                              </h2>
                              <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
                                  data-bs-parent="Newsaccordion">
                                  <div class="accordion-body">${element["content"]} <a href="${element['url']}" target = "_blank">Read More here</a></div>
                              </div>
                          </div>`;

          newshtml += news;
            
       });
       Newsaccordion.innerHTML = newshtml;
    }
    else
    {
        console.log("Some error occured");
    }
}
    
    xhr.send();


   



