


document.addEventListener('DOMContentLoaded', function(){
    var itaStr = "Tradurre italiano...";
    var gerStr = "Ubersetzen Deutsch...";
    var dutStr = "Vertaal Nederlands...";
    var rusStr = "Perevesti russkiy...";
    var spaStr = "Traducir espanol...";
    var site = "dict";
    var lang = "Dutch";
    var searchButton = document.getElementById('search');
    var swapButton = document.getElementById('siteSelect');
    var menuButton = document.getElementById('settings');
    var dutchButton = document.getElementById('dutch');
    var germanButton = document.getElementById('german');
    var spanishButton = document.getElementById('spanish');
    var russianButton = document.getElementById('russian');
    var italianButton = document.getElementById('italian');

    //when search is pressed
    searchButton.addEventListener('click',function(){
        var word = document.getElementById("inputWord").value;
        chrome.runtime.sendMessage({request: word});
    });

    //when swap key is pressed
    swapButton.addEventListener('click',function(){
        if(site === "dict"){
            site = "bab";
            document.getElementById("search").style.backgroundImage = "url('images/bablalogo.png')";
        }else if(site === "bab"){
            site = "dict";
            document.getElementById("search").style.backgroundImage = "url('images/dictcclogo.png')";
        }
        chrome.runtime.sendMessage({website: site});
    });
    
    //when settings key pressed
    menuButton.addEventListener('click',function(){
        if(document.getElementById("bottom").style.display !== 'inline-block'){
            document.getElementById("bottom").style.display = 'inline-block';
        }else{
            document.getElementById("bottom").style.display = 'none';
        }
    });

    //when dutch key pressed
    dutchButton.addEventListener('click',function(){
        if(lang !== "Dutch"){
            lang = "Dutch";
            chrome.runtime.sendMessage({language:"Dutch"});
            dutchButton.style.backgroundColor = "rgb(255, 116, 116)";
            document.getElementById('inputWord').placeholder = dutStr;
        }
        germanButton.style.backgroundColor = "lightgrey";
        spanishButton.style.backgroundColor = "lightgrey";
        russianButton.style.backgroundColor = "lightgrey";
        italianButton.style.backgroundColor = "lightgrey";
    });
    

    //when german key pressed
    germanButton.addEventListener('click',function(){
        if(lang !== "Germ"){
            lang = "Germ";
            chrome.runtime.sendMessage({language:"Germ"});
            germanButton.style.backgroundColor = "rgb(255, 116, 116)";
            document.getElementById('inputWord').placeholder = gerStr;
        }
        dutchButton.style.backgroundColor = "lightgrey";
        spanishButton.style.backgroundColor = "lightgrey";
        russianButton.style.backgroundColor = "lightgrey";
        italianButton.style.backgroundColor = "lightgrey";
    });

    //when spanish key pressed
    spanishButton.addEventListener('click',function(){
        if(lang !== "Span"){
            lang = "Span";
            chrome.runtime.sendMessage({language:"Span"});
            spanishButton.style.backgroundColor = "rgb(255, 116, 116)";
            document.getElementById('inputWord').placeholder = spaStr;
        }
        germanButton.style.backgroundColor = "lightgrey";
        dutchButton.style.backgroundColor = "lightgrey";
        russianButton.style.backgroundColor = "lightgrey";
        italianButton.style.backgroundColor = "lightgrey";
    });

    //when russian key pressed
    russianButton.addEventListener('click',function(){
        if(lang !== "Rus"){
            lang = "Rus";
            chrome.runtime.sendMessage({language:"Rus"});
            russianButton.style.backgroundColor = "rgb(255, 116, 116)";
            document.getElementById('inputWord').placeholder = rusStr;
        }
        germanButton.style.backgroundColor = "lightgrey";
        spanishButton.style.backgroundColor = "lightgrey";
        dutchButton.style.backgroundColor = "lightgrey";
        italianButton.style.backgroundColor = "lightgrey";
    });

    italianButton.addEventListener('click',function(){
        if(lang !== "Ita"){
            lang = "Ita";
            chrome.runtime.sendMessage({language:"Ita"});
            italianButton.style.backgroundColor = "rgb(255, 116, 116)";
            document.getElementById('inputWord').placeholder = itaStr;
        }
        germanButton.style.backgroundColor = "lightgrey";
        spanishButton.style.backgroundColor = "lightgrey";
        dutchButton.style.backgroundColor = "lightgrey";
        russianButton.style.backgroundColor = "lightgrey";
    });

    //when enter is pressed
    document.onkeydown = function(e) {
        if(e.keyCode == 13){
            var word = document.getElementById("inputWord").value;
            chrome.runtime.sendMessage({request: word});
        }
    };
    

});