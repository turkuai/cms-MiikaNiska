function addArticle(event)
{
    

    const newarticle = document.getElementById("newarticle")
    
    if (event.target.innerHTML != "Save"){
        newarticle.hidden = false
        event.target.innerHTML = "Save"
    } else {
        newarticle.hidden = true
        event.target.innerHTML = "Add article"
        const title = document.getElementById("title").value
        const text = document.getElementById("text").value
        addArticleElement(title, text)
    }

}

function addArticleElement(title, text)
{
    const article = document.createElement("article")
    article.setAttribute("class", "post")
    article.innerHTML = `<div class="post-content">
                    <h2>${title}</h2>
                    <p>${text}</p>
                </div>
                <div class="image">
                    <img src="images/house.png">
                </div>`

    const articles =  document.getElementById("articles")
    articles.appendChild(article)
}