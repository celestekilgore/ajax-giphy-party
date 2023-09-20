"use strict";

console.log("Let's get this party started!");

//TODO: add global variables (api key, any html elements)

/** Prevents default, calls searchGiphy, appends the image returned to DOM */
async function appendGif(evt) {
  evt.preventDefault();
  const link = await searchGiphy();
  const $gif = $(`<img src=${link} border=${0}></img>`); //TODO: key/val pairs
  const $container = $("#container"); //TODO: make container global
  $container.append($gif);
}

/** Searches giphy based on input and returns link to a random GIF */
async function searchGiphy() {
  const apiKey = "aF0TcnfiZZLOXxKAJP5vJvXzuLW5iiFd";
  const search = $("#search-term").val();
  //http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym.
  const params = new URLSearchParams({ tag: search, api_key: apiKey });
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?${params}`);

  const data = await response.json(); //TODO: change var name for readability sake
  return data.data.images.original.url;
}

/** Empties container of GIFs */
function deleteGifs() {
  const $container = $("#container");
  $container.empty();
}

$("#form-submit").on("submit", appendGif);

$("#delete-button").on("click",deleteGifs);