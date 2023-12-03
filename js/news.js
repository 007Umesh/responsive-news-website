let key = "6d43904138214f5199fcfa98ab978172";
let cardData = document.querySelector(".cardData");
let SearchBtn = document.getElementById("SearchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");




const getData = async (input) => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);
    searchType.innerText = "ARTICLE : " + input.toUpperCase();


    cardData.innerHTML = "";
    jsonData.articles.forEach(function (article) {
        console.log(article);


        let divs = document.createElement("div");
        divs.classList.add("card");
        cardData.appendChild(divs);
        divs.innerHTML = `
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `

        divs.addEventListener("click", function () {
            window.open(article.url)
        })
    });


}

window.addEventListener("load", function () {
    getData("india");
})


SearchBtn.addEventListener("click", function () {
    let inputText = inputData.value;
    getData(inputText);
    inputData.value = "";
})

function navclick(navItem) {
    getData(navItem);
}

function submitform() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let message = document.getElementById("text-area").value;
   
    
    if (name === "" || email === "" || dob === "" || gender === "" || message === "") {
       alert("Please fill in all fields");
       return;
   }
   let responseMessage = "Thank you, " + name + "! We received your message.";
   
               alert(responseMessage);
   
             
               document.getElementById("name").value = "";
               document.getElementById("email").value = "";
               document.getElementById("dob").value = "";
               document.getElementById("gender").value = "";
               document.getElementById("text-area").value = "";
   }
