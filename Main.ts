import Movie from "./Classes/Movie"
import TvSeries from "./Classes/TvSeries"
import Content from "./Classes/Content";


let movieList: Movie[] = []
let tvSerieList: TvSeries[] = []

function foundShow(newShowId: number, newShowType: string) {
    const apiKey = "0e3ee1b7858bef88517145e3ed37ca91";
    let showId = newShowId;
    let showType = newShowType;
    let apiUrl = `https://api.themoviedb.org/3/${showType}/${showId}?api_key=${apiKey}`;
    let httpRequestAsync = (method, url) => {
        return new Promise<string>(function (resolve, reject) {
            var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
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
        .then(res => {
            let newShow
            newShow = JSON.parse(res)
            if(showType === "movie"){
                movieList.push(newShow)
                for(var i in movieList){
                    console.log(movieList[i].title)
                }
            }
            if(showType === "tv"){
                tvSerieList.push(newShow)
                for(var i in tvSerieList){
                    console.log(tvSerieList[i].name)
                }
            }
        })
        .catch(error => console.log(error + "not found"));
}

foundShow(1412,"tv")
foundShow(38700,"movie")

