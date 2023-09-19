"use strict";
console.log("Let's get this party started!");

$("#form-submit").on("submit",searchGiphy);

const apiKey = "aF0TcnfiZZLOXxKAJP5vJvXzuLW5iiFd";

async function searchGiphy() {
  const search = $("#search-term").val();
  const params = new URLSearchParams({apiKey});
  const response = await fetch("api.giphy.com/v1/gifs/search");
  const data = await response.
}