
/*


var result;
$.get( "https://www.dictionary.com/", function(data, status) {
    console.log("Data is: " + data + ", status: " + status);
  });*/

var babDutchURL = "https://en.bab.la/dictionary/english-dutch/";
var babGermURL = "https://en.bab.la/dictionary/english-german/";
var babSpanURL = "https://en.bab.la/dictionary/english-spanish/";
var babRusURL = "https://en.bab.la/dictionary/english-russian/";
var babItaURL = "https://en.bab.la/dictionary/english-italian/";
var dictDutchURL = "https://ennl.dict.cc/?s=";
var dictGermURL = "https://www.dict.cc/?s=";
var dictSpanURL = "https://enes.dict.cc/?s=";
var dictRusURL = "https://enru.dict.cc/?s=";
var dictItaURL = "https://enit.dict.cc/?s=";
var curLang = "Dutch", curSite = "dict";
var curURL = dictDutchURL;
 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.website === "dict" || request.website === "bab"){
        curSite = request.website;    
        curURL = updateURL(curSite,curLang);
    }else if(request.language === "Dutch" || request.language === "Germ" || request.language === "Span" || request.language === "Rus" || request.language === "Ita"){
        curLang = request.language;
        curURL = updateURL(curSite,curLang);
    }
    else//(specURL.startsWith("https://browse.dict.cc/dutch-english/") || specURL.startsWith("https://en.bab.la/dictionary/english-dutch/"))
    {  //triggers every time because it is never empty
        var specURL = returnFullURL(request.request);
        chrome.tabs.create({url: specURL});
    }
 });

function updateURL(site,language){
    if(site === "dict"){
        if(language === "Dutch"){
            return dictDutchURL;
        }else if(language === "Germ"){
            return dictGermURL;
        }else if(language === "Span"){
            return dictSpanURL;
        }else if(language === "Rus"){
            return dictRusURL;
        }else{
            return dictItaURL;
        }
    }else{
        if(language === "Dutch"){
            return babDutchURL;
        }else if(language === "Germ"){
            return babGermURL;
        }else if(language === "Span"){
            return babSpanURL;
        }else if(language === "Rus"){
            return babRusURL;
        }else{
            return babItaURL;
        }
    }
}

 function returnFullURL(word){
    var finalURL;
    finalURL = curURL + word;
    return finalURL;
 }
