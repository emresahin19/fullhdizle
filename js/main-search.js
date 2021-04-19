
var page =1;
function pageFunction(k) 
{
    page = document.getElementById("pagevalue-"+k).value;
    console.log(page);
}   
 

var letter="";
function letterSearch(i)
{   
    letter = document.getElementById('letter-search-'+i).value;
    
}
       
function keyboardSearch() 
{
    var k = document.getElementById("lettermain");
    var l = document.getElementById("keyboardsearcher");
    if (l.style.display === "none") 
    {
        l.style.display = "block";
        k.style.display= "none";
    }
    console.log(this.page);
    console.log(this.letter);
        
    var api_key = "c71a84891365ebe5ddf2ade7ce653c73";
    var base_uri = "https://api.themoviedb.org/3/";
    var images_uri = "http://image.tmdb.org/t/p";
    var language = "&language=en-US";
    var searchkey = "search/movie";
    var multi_search = "search/multi";
    var searchedletter="&language=tr&query=" + letter;
    var multi_url = base_uri + multi_search + "?api_key=" + api_key+ language + searchedletter + "&page=" + page;
    //multi search url = https://api.themoviedb.org/3/search/multi?api_key=c71a84891365ebe5ddf2ade7ce653c73&language=tr&query=a&page=1
    //with sort = https://api.themoviedb.org/3/discover/movie?api_key=c71a84891365ebe5ddf2ade7ce653c73&language=tr&query=A&sort_by=original_title.asc&page=1
    fetch(multi_url).then(function (response) 
    {
        response.json().then(function (post) 
        {
            var multisearcharray = post["results"];
            console.log(multisearcharray);
            var n=0;
                for(var j=0; j<5; j++)
                {
                    if(n==3 || n==7 || n==11 || n==15 || n==19){n=n-j}  
                    for(n, m=0; k<20, m<4; n++, m++)
                    {
                        console.log("k="+n+" j="+j+" m="+m);
                        var mainfilmnamearray = multisearcharray[n];
                        console.log(mainfilmnamearray);
                        var mainfilmname = mainfilmnamearray["original_name"];
                        if(mainfilmname==null){
                            var mainfilmname = mainfilmnamearray["original_title"];
                        }
                        console.log(mainfilmname);
                        var mainchangedidname = "moviea-col-"+j+"-"+m;
                        console.log(mainchangedidname);
                        var mainfilmname_a = '<a href="#" class="main-movies-header">'+ mainfilmname +'</a>';
                        document.getElementById(mainchangedidname).innerHTML = mainfilmname_a ;

                        var multifilmposterarray = multisearcharray[n];
                        var multifilmposterpath = multifilmposterarray["poster_path"];
                        console.log(multifilmposterpath);
                        var multifilm_picture =  '<img class="main-movies-img" src="'+images_uri+"/original"+multifilmposterpath+'"></img>';
                        var multifilm_picture_bos = "<img  class='main-movies-img' src='images/maxresdefault.jpg'></img>"
                        var multichangedidpicture = "moviepic-col-"+j+"-"+m;
                        if(multifilmposterpath==null){
                            document.getElementById(multichangedidpicture).innerHTML = multifilm_picture_bos;
                        }
                        else {
                            document.getElementById(multichangedidpicture).innerHTML = multifilm_picture;
                        }

                    }
                }
                
        
            })

        .catch(function (err) {})
        });
    } 
    
//}