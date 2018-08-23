$(document).ready(function(){

    var queryURL = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=dc0b655ed5a14419a3aced7aef657d96"

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)

        $(".display-4").text(response.articles[1].title)
        $(".lead").text(response.articles[1].description)
        $("#test2").append(response.articles[1].url)
        $(".name1").text(" Published By:" + response.articles[1].source.name)

    });

    var queryURL1 = "https://newsapi.org/v2/top-headlines?category=sports&q=Chelsea&apiKey=dc0b655ed5a14419a3aced7aef657d96"

    $.ajax({
        url:queryURL1,
        method: "GET"
    }).then(function(response){

        $(".card-text1").text(response.articles[0].description)
    });


    var queryURL2 = "https://newsapi.org/v2/top-headlines?category=sports&q=ohio&apiKey=dc0b655ed5a14419a3aced7aef657d96"

    $.ajax({
        url:queryURL2,
        method:"GET"
    }).then(function(){
        
    })
})