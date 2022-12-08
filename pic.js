document.querySelector("#search").addEventListener("click", function () {
    search();
  });
  
  search = () => {
     
    let imgSearch = document.getElementById("imgSearch").value;
  
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=YE5Q5b8pJlSFjrfT1KcSWaEQy8KsAdIj&q=" +
        imgSearch +
        "&limit=5&offset=0&rating=g&lang=en"
    )
      .then((response) => response.json())
      .then((gif) => {
        document.getElementById("imgViewe").innerHTML +=
          `<img src="${gif.data[0].images.fixed_width.url}" alt="${imgSearch}" class="img"></img>` +
          `<img src="${gif.data[1].images.fixed_width.url}" alt="${imgSearch}" class="img"></img>` +
          `<img src="${gif.data[2].images.fixed_width.url}" alt="${imgSearch}" class="img"></img>` +
          `<img src="${gif.data[3].images.fixed_width.url}" alt="${imgSearch}" class="img"></img>` +
          `<img src="${gif.data[4].images.fixed_width.url}" alt="${imgSearch}" class="img"></img>`;
      })
      .catch((error) => console.log(error)) 
      .break;
  }
  
  