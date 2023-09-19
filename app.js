"use strict";
console.log("Let's get this party started!");

$("#form-submit").on("click",searchGiphy);


/**Searches giphy based on input and console logs resulting json */
async function searchGiphy(evt) {
  evt.preventDefault();
  const apiKey = "aF0TcnfiZZLOXxKAJP5vJvXzuLW5iiFd";
  const search = $("#search-term").val();
  //http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym.
  const params = new URLSearchParams({q: search, api_key: apiKey});
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?${params}`,{
    headers: {
      "Content-Type": "application/json"},
  });
  const data = await response.json();

  const link = data.data[0].embed_url;
  //TODO: random 0 for data.data.length

  console.log(link);

  const gif = $(`<iframe src=${link}></iframe>`);

  const container = $("#container");
  container.append(gif);

}
