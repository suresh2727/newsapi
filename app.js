const apikey = "4ec3fc431c9a423d90bcc5aaa2832282";
const apiurl =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology";

const searchbtn = document.querySelector(".btn");
const newsImage = document.querySelector(".new-img");
const newsTitle = document.querySelector(".news-title");
const newsDetails = document.querySelector(".news-details");
const discon = document.querySelector(".news-card");
async function processData() {
  // Await the result of the asynchronous operation
  const response = await fetch(apiurl + `&apiKey=${apikey}`);

  document.querySelector(".news-card").style.display = "block";
  var data = await response.json();
  console.log(data);
  var articlesnumber = Math.floor(Math.random(parseInt(data.articles)) * 20);

  document.querySelector(".news-title").innerHTML =
    data.articles[articlesnumber].author;
  document.querySelector(".news-details").innerHTML =
    data.articles[articlesnumber].description;

  var image = document.getElementById("news-img");
  image.src = data.articles[articlesnumber].urlToImage;

  // Further processing with the received data
}
searchbtn.addEventListener("click", () => {
  processData();
  console.log("btn clicked");
});
