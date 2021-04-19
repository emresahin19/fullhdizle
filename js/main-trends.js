

    var api_key = "c71a84891365ebe5ddf2ade7ce653c73";
    var base_uri = "https://api.themoviedb.org/3/";
    var images_uri = "http://image.tmdb.org/t/p";
    var language="&language=en-US";
    var populerkey = "movie/popular";
    var topratedkey = "movie/top_rated";
    var upcomkey = "/movie/upcoming";
    var page="1";
    var upcoming= "&sort_by=release_date.desc"

    var populer_url = base_uri + populerkey + "?api_key=" + api_key + language + "&page=" + page;
    console.log(populer_url);
    //https://api.themoviedb.org/3/movie/popular?api_key=c71a84891365ebe5ddf2ade7ce653c73&language=en-US&page=1
    var toprated_url = base_uri + topratedkey + "?api_key=" + api_key + language + "&page=" + page;
    console.log(toprated_url);
    //https://api.themoviedb.org/3/movie/top_rated?api_key=c71a84891365ebe5ddf2ade7ce653c73&language=en-US&page=1
    var upcom_url = base_uri + upcomkey + "?api_key=" + api_key+ language + upcoming  + "&page=" + page;
    console.log(populer_url);
    //https://api.themoviedb.org/3/movie/upcoming?api_key=c71a84891365ebe5ddf2ade7ce653c73&language=en-US&page=1

    fetch(populer_url + toprated_url).then(function (response) 
    {
        response.json().then(function (post) 
        {   
            var trendsarray = post["results"];
            console.log(trendsarray);
            for(var i=0; i<5; i++)
            {               
                var trendfilmnamearray = trendsarray[i];
                console.log(trendfilmnamearray);
                var trendfilmname = trendfilmnamearray["original_name"];
                if(trendfilmname==null){
                    var trendfilmname = trendfilmnamearray["original_title"];
                }
                console.log(trendfilmname);
                var trendchangedidname = "populer-"+i;
                console.log(trendchangedidname);
                var trendfilmname_a = '<a href="#" class="main-movies-header">'+ trendfilmname +'</a>';
                document.getElementById(trendchangedidname).innerHTML = trendfilmname_a ;

                var trendfilmposterarray = trendsarray[i];
                var trendfilmposterpath = trendfilmposterarray["poster_path"];
                console.log(trendfilmposterpath);
                var trendfilm_picture =  '<img class="main-movies-img" src="'+images_uri+"/original"+trendfilmposterpath+'"></img>';
                var trendfilm_picture_bos = "<img  class='main-movies-img' src='images/maxresdefault.jpg'></img>"
                var trendchangedidpicture = "populer-img-"+i;
                if(trendfilmposterpath==null){
                    document.getElementById(trendchangedidpicture).innerHTML = trendfilm_picture_bos;
                }
                else {
                    document.getElementById(trendchangedidpicture).innerHTML = trendfilm_picture;
                }
            }
            var slidersarray = post["results"];
            for(var i=5; i<8; i++){
                var sliderfilmnamearray = slidersarray[i];
                console.log(sliderfilmnamearray);
                varsliderfilmname = sliderfilmnamearray["original_name"];
                if(sliderfilmname==null){
                    var sliderfilmname = sliderfilmnamearray["original_title"];
                }
                console.log(sliderfilmname);
                var sliderchangedidname = "slider-header-"+i;
                console.log(sliderchangedidname);
                var sliderfilmname_a = '<a href="#" >'+ sliderfilmname +'</a>';
                document.getElementById(sliderchangedidname).innerHTML = sliderfilmname_a ;

                var sliderfilmposterarray = slidersarray[i];
                var sliderfilmposterpath = sliderfilmposterarray["poster_path"];
                console.log(sliderfilmposterpath);
                var sliderfilm_picture =  '<img src="'+images_uri+"/original"+sliderfilmposterpath+'"></img>';
                var sliderfilm_picture_bos = "<img src='images/maxresdefault.jpg'></img>"
                var sliderchangedidpicture = "slider-pic-"+i;
                if(sliderfilmposterpath==null){
                    document.getElementById(sliderchangedidpicture).innerHTML = sliderfilm_picture_bos;
                }
                else {
                    document.getElementById(sliderchangedidpicture).innerHTML = sliderfilm_picture;
                }
            }

            var upcomsarray = post["results"];
            console.log(upcomsarray);
            for(var i=0; i<5; i++)
            {   var j=7;
                j=i+j;            
                var upcomfilmnamearray = upcomsarray[j];
                console.log(upcomfilmnamearray);
                var upcomfilmname = upcomfilmnamearray["original_name"];
                if(upcomfilmname==null){
                    var upcomfilmname = upcomfilmnamearray["original_title"];
                }
                console.log(upcomfilmname);
                var upcomchangedidname = "upcom-"+i;
                console.log(upcomchangedidname);
                var upcomfilmname_a = '<a href="#" class="main-movies-header">'+ upcomfilmname +'</a>';
                document.getElementById(upcomchangedidname).innerHTML = upcomfilmname_a ;

                var upcomfilmposterarray = upcomsarray[j];
                var upcomfilmposterpath = upcomfilmposterarray["poster_path"];
                console.log(upcomfilmposterpath);
                var upcomfilm_picture =  '<img class="main-movies-img" src="'+images_uri+"/original"+upcomfilmposterpath+'"></img>';
                var upcomfilm_picture_bos = "<img  class='main-movies-img' src='images/maxresdefault.jpg'></img>"
                var upcomchangedidpicture = "upcom-img-"+i;
                if(upcomfilmposterpath==null){
                    document.getElementById(upcomchangedidpicture).innerHTML = upcomfilm_picture_bos;
                }
                else {
                    document.getElementById(upcomchangedidpicture).innerHTML = upcomfilm_picture;
                }
            }
        })

    .catch(function (err) {})
    });

    fetch(toprated_url).then(function (response) 
    {
        response.json().then(function (post) 
        {
            var topratedsarray = post["results"];
            console.log(topratedsarray);
            for(var i=0; i<5; i++)
            {               
                var topratedfilmnamearray = topratedsarray[i];
                console.log(topratedfilmnamearray);
                var topratedfilmname = topratedfilmnamearray["original_name"];
                if(topratedfilmname==null){
                    var topratedfilmname = topratedfilmnamearray["original_title"];
                }
                console.log(topratedfilmname);
                var topratedchangedidname = "toprated-"+i;
                console.log(topratedchangedidname);
                var topratedfilmname_a = '<a href="#" class="main-movies-header">'+ topratedfilmname +'</a>';
                document.getElementById(topratedchangedidname).innerHTML = topratedfilmname_a ;

                var topratedfilmposterarray = topratedsarray[i];
                var topratedfilmposterpath = topratedfilmposterarray["poster_path"];
                console.log(topratedfilmposterpath);
                var topratedfilm_picture =  '<img class="main-movies-img" src="'+images_uri+"/original"+topratedfilmposterpath+'"></img>';
                var topratedfilm_picture_bos = "<img  class='main-movies-img' src='images/maxresdefault.jpg'></img>"
                var topratedchangedidpicture = "toprated-img-"+i;
                if(topratedfilmposterpath==null){
                    document.getElementById(topratedchangedidpicture).innerHTML = topratedfilm_picture_bos;
                }
                else {
                    document.getElementById(topratedchangedidpicture).innerHTML = topratedfilm_picture;
                }
            }
        })

    .catch(function (err) {})
    });
      
