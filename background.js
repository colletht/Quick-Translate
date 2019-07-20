const languageData = {
    "dict" : {
        "dutch" : "https://ennl.dict.cc/?s=",
        "german" : "https://www.dict.cc/?s=",
        "spanish" : "https://enes.dict.cc/?s=",
        "russian" : "https://enru.dict.cc/?s=",
        "italian" : "https://enit.dict.cc/?s="
    },
    "bab" : {
        "dutch" : "https://en.bab.la/dictionary/english-dutch/",
        "german" : "https://en.bab.la/dictionary/english-german/",
        "spanish" : "https://en.bab.la/dictionary/english-spanish/",
        "russian" : "https://en.bab.la/dictionary/english-russian/",
        "italian" : "https://en.bab.la/dictionary/english-italian/"
    }
};

var curLang = "dutch", curSite = "dict";
var curURL = languageData[curSite][curLang];

browser.storage.onChanged.addListener(function(changes, areaName){
    if(areaName !== 'sync') return;

    console.log(changes);

    if(changes.website){
        curSite = changes.website.newValue;
        curURL = languageData[curSite][curLang];
    }
    if(changes.language){
        curLang = changes.language.newValue;
        curURL = languageData[curSite][curLang];
    }
    if(changes.request){
        var specURL = returnFullURL(changes.request.newValue);
        browser.tabs.create({url: specURL})
    }
});

function returnFullURL(word){
    return curURL + word;
}
