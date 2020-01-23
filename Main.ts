import Movie from "./Classes/Movie"
import TvSeries from "./Classes/TvSeries"

const apiKey = "0e3ee1b7858bef88517145e3ed37ca91";
let movieId = 1412;
let apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
let httpRequestAsync = (method, url) => {
    return new Promise<string>(function(resolve, reject) {
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(xhr.responseText));
        }
      };
      xhr.send();
    });
  };
  
  httpRequestAsync("get", apiUrl)
    //.then(res => console.log(res))
    .catch(error => console.log(error));