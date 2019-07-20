
const btnSelectedColor = "rgb(255, 116, 116)";
const btnDeSelectedColor = "lightgrey";

document.addEventListener('DOMContentLoaded', function(){
    console.log("DOMContentLoaded");
    const languageData = {
        "dutch" : {
            prompt : "Vertaal Nederlands...",
            btn : document.getElementById('dutch')
        },
        "german" : {
            prompt : "Ubersetzen Deutsch...",
            btn : document.getElementById('german')

        },
        "spanish" : {
            prompt : "Traducir espanol...",
            btn : document.getElementById('spanish')

        },
        "russian" : {
            prompt : "Perevesti russkiy...",
            btn : document.getElementById('russian')

        },
        "italian" : {
            prompt : "tradurre italiano...",
            btn : document.getElementById('italian')

        }
    }

    const searchBtn = document.getElementById('search');
    const swapBtn = document.getElementById('siteSelect');
    const menuBtn = document.getElementById('settings');

    browser.storage.sync.get(['website', 'language']).then( res => {
        console.log("Stored data retrieved")
        //setting currents from storage if there is anything
        var curSite = swapToSite(searchBtn, res.website);
        var curLang = swapToLang(languageData, res.language, null);


        //when search is pressed
        searchBtn.addEventListener('click',function(){
            console.log('search')
            var word = document.getElementById("inputWord").value;
            browser.storage.sync.set({
                request : word
            });
        });
    
        //when swap key is pressed
        swapBtn.addEventListener('click',function(){
            console.log('swap')
            curSite = swapToSite(searchBtn, curSite === 'bab' ? 'dict': 'bab');
        });
        
        //when settings key pressed
        menuBtn.addEventListener('click',function(){
            console.log('menu')
            if(document.getElementById("bottom").style.display !== 'inline-block'){
                document.getElementById("bottom").style.display = 'inline-block';
            }else{
                document.getElementById("bottom").style.display = 'none';
            }
        });
    
        //when a language button is pressed
        for(var language in languageData){
            console.log(`Adding listener for ${language} button`)
            languageData[language].btn.onclick = function(){
                console.log(this.id);
                curLang = swapToLang(languageData, this.id, curLang);
            }
        };
    
        //when enter is pressed
        document.onkeydown = function(e) {
            if(e.keyCode == 13){
                console.log('enter');
                var word = document.getElementById("inputWord").value;
                browser.storage.sync.set({request: word});
            }
        };
    }).catch(err => console.log(`Load Settings ERROR: ${err}`));
});

//helper function to swap to a language
function swapToLang(languageData, language, curLang){
    if(language === null) 
        language = "dutch"; //default to dutch
    if(curLang !== null)
        languageData[curLang].btn.style.backgroundColor = btnDeSelectedColor;
    curLang = language;
    browser.storage.sync.set({ language : language });
    languageData[curLang].btn.style.backgroundColor = btnSelectedColor;
    document.getElementById('inputWord').placeholder = languageData[curLang].prompt;
    return language;
}

//helper function to swap to a website
function swapToSite(btn, curSite){
    if(curSite === "dict"){
        btn.style.backgroundImage = "url('images/dictcclogo.png')";
        curSite = "dict";
    }else if (curSite === "bab"){
        btn.style.backgroundImage = "url('images/bablalogo.png')";
        curSite = "bab";
    }else{
        //default to bab
        btn.style.backgroundImage = "url('images/bablalogo.png')";
        curSite = "bab";
    }
    browser.storage.sync.set({website: curSite});
    return curSite;
}