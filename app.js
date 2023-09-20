"use strict";

console.log("Let's get this party started!");

$("#form-submit").on("submit", appendGif);

$("#delete-button").on("click",deleteGifs);

/** Prevents default, calls searchGiphy, appends the image returned to DOM */
async function appendGif(evt) {
  evt.preventDefault();
  const link = await searchGiphy();
  const $gif = $(`<iframe src=${link} border=${0}></iframe>`);
  const $container = $("#container");
  $container.append($gif);
}

/** Searches giphy based on input and returns link to a random GIF */
async function searchGiphy() {
  const apiKey = "aF0TcnfiZZLOXxKAJP5vJvXzuLW5iiFd";
  const search = $("#search-term").val();
  //http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym.
  const params = new URLSearchParams({ tag: search, api_key: apiKey });
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?${params}`,{
    headers: {
      "Content-Type": "application/json"
    },
  });

  const data = await response.json();

  return data.data.embed_url;
}

/** Empties container of GIFs */
function deleteGifs() {
  const $container = $("#container");
  $container.empty();
}