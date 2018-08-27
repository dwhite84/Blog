$(document).ready(function(){

    jumboarticle();
    chelseafc();
    osunews();


$("#run-search").on("click", function(event){
    event.preventDefault();
    // clear();

    var queryURL4 = "https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=dc0b655ed5a14419a3aced7aef657d96"

    $.ajax({
        url:queryURL4,
        method:"GET"
    }).then(function(response){
        console.log(response)

        $(".resultpage").append("<h5>" + response.articles.title + "</h5><p>" + response.articles.description + "</p>" + '<a href ="' + response.articles.url + '"" target="_blank" >Learn more...</a><hr>')
    })
})


function jumboarticle (){

    var queryURL = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=dc0b655ed5a14419a3aced7aef657d96"

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        // console.log(response)

        $(".display-4").append(response.articles[1].title)
        $(".lead").text(response.articles[1].description)
        $(".button1").append('<a href ="' + response.articles[1].url + '"" target="_blank" >Learn more...</a>')
        $(".name1").text(" Published By:" + response.articles[1].source.name)
        $(".othernews").append("<h5>" + response.articles[2].title + "</h5><p>" + response.articles[2].description + "</p>" + '<a href ="' + response.articles[2].url + '"" target="_blank" >Learn more...</a><hr>');
        $(".othernews").append("<h5>" + response.articles[3].title + "</h5><p>" + response.articles[3].description + "</p>" + '<a href ="' + response.articles[3].url + '"" target="_blank" >Learn more...</a><hr>');
        $(".othernews").append("<h5>" + response.articles[4].title + "</h5><p>" + response.articles[4].description + "</p>" + '<a href ="' + response.articles[4].url + '"" target="_blank" >Learn more...</a><hr>');
        $(".othernews").append("<h5>" + response.articles[5].title + "</h5><p>" + response.articles[5].description + "</p>" + '<a href ="' + response.articles[5].url + '"" target="_blank" >Learn more...</a><hr>');
        $(".othernews").append("<h5>" + response.articles[6].title + "</h5><p>" + response.articles[6].description + "</p>" + '<a href ="' + response.articles[6].url + '"" target="_blank" >Learn more...</a>');

    });
};

function chelseafc (){


    var queryURL1 = "https://newsapi.org/v2/top-headlines?category=sports&q=Chelsea&apiKey=dc0b655ed5a14419a3aced7aef657d96"

    $.ajax({
        url:queryURL1,
        method: "GET"
    }).then(function(response){

        $(".card-text1").text(response.articles[1].description)
        $(".button2").append('<a href ="' + response.articles[1].url + '"" target="_blank" >Learn more...</a>')
    });
};

function osunews (){

    var queryURL2 = "https://newsapi.org/v2/everything?q=osu&apiKey=dc0b655ed5a14419a3aced7aef657d96"

    $.ajax({
        url:queryURL2,
        method:"GET"
    }).then(function(response){
        // console.log(response)
        $(".card-text3").append(response.articles[0].description)
        $(".button3").append('<a href ="' + response.articles[0].url + '"" target="_blank" >Learn more...</a>')
    });
};



})