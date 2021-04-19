    
    
function getQuery(event) {
    event.preventDefault();
    var searchedkey = document.querySelector('#search-box').value;

    console.log(searchedkey);

    var api_key = "c71a84891365ebe5ddf2ade7ce653c73";
    var base_uri = "https://api.themoviedb.org/3/";
    var images_uri = "http://image.tmdb.org/t/p";
    var language = "en-US";
    var genrekey = "genre/movie/list"
    var moviekey = "movie/";
    var searchkey = "search/movie";
    var multi_search = "search/multi";
    var page="";
    var letter="";
    var search_url = base_uri + searchkey + "?api_key=" + api_key + "&query=" + searchedkey ;
    var multi_url = base_uri + multi_search + "?api_key=" + api_key + "&query=" + letter + "&page=" + page;
    console.log(search_url); //https://api.themoviedb.org/3/search/movie?api_key=c71a84891365ebe5ddf2ade7ce653c73&query=
    
    //deneme site url = https://api.themoviedb.org/3/movie/11818?api_key=c71a84891365ebe5ddf2ade7ce653c73
    //multi search url = https://api.themoviedb.org/3/search/multi?api_key=c71a84891365ebe5ddf2ade7ce653c73&language=tr&query=a&page=1

    fetch(search_url).then(function (response) 
    {
        response.json().then(function (post) 
        {
            var countlength = post["results"];
            var counter = countlength.length;
            var filmcounterfill = '<button type="submit" name="countername" id="counterid" value="' + counter +'"/>';
            document.getElementById("idcounter").innerHTML = filmcounterfill;
            
            
            for( var i=0; i<counter; i++)
            {
                var searcharray = post["results"];
                console.log(searcharray);
                
                var filmgenre_array = searcharray[i];
                var film_id = filmgenre_array["id"];
                console.log(film_id);
                
                var main_url =  base_uri + moviekey + film_id + "?api_key=" + api_key;
                console.log(main_url);
                
                var filmnamearray = searcharray[i];
                var filmhomepage =  post["homepage"];
                
                
                var filmnamearray = searcharray[i];
                var filmname = filmnamearray["original_title"];
                console.log(filmname);
                var changedidname = "film-name-" + i;
                var filmname_h2 = "<a href='"+filmhomepage+"' target='_blank'>" + filmname + "</a>";
                document.getElementById(changedidname).innerHTML = filmname_h2 ;

                var filmposterarray = searcharray[i];
                var filmposterpath = filmposterarray["poster_path"];
                var film_picture =  "<img src='" + images_uri + "/original" + filmposterpath +"'></img>";
                var film_picture_bos = "<img src='images/maxresdefault.jpg'></img>"
                var changedidpicture = "film-picture-" + i;
                if(filmposterpath==null){
                    document.getElementById(changedidpicture).innerHTML = film_picture_bos;
                }
                else {
                    document.getElementById(changedidpicture).innerHTML = film_picture;
                }
                
                var filmoverviewarray = searcharray[i];
                var filmoverview = filmoverviewarray["overview"];
                console.log(filmoverview);
                var changedidoverview = "film-overview-" + i;
                document.getElementById(changedidoverview).innerHTML = filmoverview;
                
                var filmvotearray = searcharray[i];
                var filmvoteaverage = filmvotearray["vote_average"];
                var changedidvote = "film-rated-" + i;
                var filledstar = '<i class="fas fa-star"></i>';
                var notfilledstar = '<i class="far fa-star"></i>';
                if( filmvoteaverage>=0 && filmvoteaverage<2){
                    var ratedvalue = '<div class="film-stars-'+ i +'">' + filledstar + notfilledstar + notfilledstar + notfilledstar + notfilledstar+" "+ filmvoteaverage +'</div>';
                    document.getElementById(changedidvote).innerHTML = ratedvalue;

                }
                else if( filmvoteaverage>=2 && filmvoteaverage<4){
                    var ratedvalue = '<div class="film-stars-'+ i +'">'+ filledstar + filledstar + notfilledstar + notfilledstar + notfilledstar+ " "+ filmvoteaverage +'</div>';
                    document.getElementById(changedidvote).innerHTML = ratedvalue;
                                    
                }
                else if( filmvoteaverage>=4 && filmvoteaverage<6){
                    var ratedvalue = '<div class="film-stars-'+ i +'">'+ filledstar + filledstar + filledstar + notfilledstar + notfilledstar+ " "+ filmvoteaverage +'</div>';
                    document.getElementById(changedidvote).innerHTML = ratedvalue;
                    
                 }
                else if( filmvoteaverage>=6 && filmvoteaverage<8){
                    var ratedvalue = '<div class="film-stars-'+ i +'">'+ filledstar + filledstar + filledstar + filledstar + notfilledstar+ " "+ filmvoteaverage +'</div>';
                    document.getElementById(changedidvote).innerHTML = ratedvalue;
                    
                }
                else if( filmvoteaverage>=8 && filmvoteaverage<10){
                    var ratedvalue = '<div class="film-stars-'+ i +'">'+ filledstar + filledstar + filledstar + filledstar + filledstar+ " "+ filmvoteaverage +'</div>';
                    document.getElementById(changedidvote).innerHTML = ratedvalue;
                    
               }
               
                    
            }
            /* {
                '<div class="film-stars-'+ i +'">',
                                    '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
                                    '<i class="far fa-star"></i>',   
                                '</div>'
                var filmgenre_array = post["genres"]; //türün id'si ve filmin türü
                var filmgenre = filmgenre_array[0];
                var filmgenre_name = filmgenre["name"];
                var filmgenre_id = filmgenre["id"];
                document.getElementById("film-genre").innerHTML =filmgenre_name;  
        
            }*/
            
        })
        

    .catch(function (err) {})
    });
    
}

var genre_url = "https://api.themoviedb.org/3/genre/movie/list?api_key=c71a84891365ebe5ddf2ade7ce653c73&language=tr";
fetch(genre_url).then(function (response) 
{
    response.json().then(function (post) 
    {
        for(var i=0; i<20; i++)
        {
           
            var genrearray = post["genres"];
            var genresarray = genrearray[i]["name"];
            document.getElementById('genres-'+i).innerHTML = genresarray;
        }         
        
    })

    .catch(function (err) {})
});





/* var      filmname = post["original_title"];
            document.getElementById("film-name").innerHTML = filmname; 
            var filmhomepage =  post["homepage"];
            var filmhomepage_link = "<a href='"+ filmhomepage + "' target='_blank'>Film linki</a>";
            document.getElementById("film-home-page").innerHTML = filmhomepage_link;

            var filmdbpage_link = "<a href='"+ search_url + "' target='_blank'>Database</a>";
            document.getElementById("film-db-name").innerHTML = filmdbpage_link;
            
            var filmlang  = post["original_language"];
            document.getElementById("film-lang").innerHTML = filmlang;

            var filmgenre_array = post["genres"]; //türün id'si ve filmin türü
            var filmgenre = filmgenre_array[0];
            var filmgenre_name = filmgenre["name"];
            var filmgenre_id = filmgenre["id"];
            document.getElementById("film-genre").innerHTML =filmgenre_name;

            var filmoverview = post["overview"];
            document.getElementById("film-overview").innerHTML = filmoverview;

            var filmposterpath = post["poster_path"];
            var film_picture =  "<img src='" + images_uri + "/original" + filmposterpath +"'></img>";
            document.getElementById("film-poster-path").innerHTML = film_picture;

            var filmvoteaverage = post["vote_average"];
            document.getElementById("vote-average").innerHTML = filmvoteaverage; */