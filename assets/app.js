// Solarized Palette
var solarized_baseDark  = "#002b36";
var solarized_baseLight  = "#fdf6e3";
var solarized_baseZero = "#839496";
var solarized_yellow  = "#b58900";
var solarized_orange  = "#cb4b16";
var solarized_red     = "#dc322f";
var solarized_magenta = "#d33682";
var solarized_violet  = "#6c71c4";
var solarized_blue    = "#268bd2";
var solarized_cyan    = "#2aa198";
var solarized_green   = "#859900";





var phrase = ["kick", "cat"]

for (var i = 0; i < phrase.length; i++){

    var word = phrase[i]

console.log('word before api ' + word)

    $.get('http://api.pearson.com/v2/dictionaries/entries?headword=' + word).done(function(response){

console.log('word after api ' + word)

        var partOfSpeech = response.results[0].part_of_speech;
        console.log(partOfSpeech)

        changeColor(partOfSpeech,word);

    }) //$.get

}//forloop








function changeColor(partOfSpeech, word){
console.log('change color ' + word)
    if (partOfSpeech === 'verb'){
        $(".solarizedTxt").append("<span style=color:" + solarized_orange + ">" + word + "</span>")

    } else if (partOfSpeech === 'noun'){
        $(".solarizedTxt").append("<span style=color:" + solarized_green + ">" + word + "</span>")

    } else if (partOfSpeech === 'adjective'){
        $(".solarizedTxt").append("<span style=color:" + solarized_violet + ">" + word + "</span>")

    } else if (partOfSpeech === 'adverb'){
        $(".solarizedTxt").append("<span style=color:" + solarized_yellow + ">" + word + "</span>")

    } else if (partOfSpeech === 'preposition'){
        $(".solarizedTxt").append("<span style=color:" + solarized_blue + ">" + word + "</span>")

    } else if (partOfSpeech === 'conjunction' || partOfSpeech === 'conj'){
        $(".solarizedTxt").append("<span style=color:" + solarized_cyan + ">" + word + "</span>")

    } else if (partOfSpeech === 'interjection' || partOfSpeech === 'interj'){
        $(".solarizedTxt").append("<span style=color:" + solarized_red + ">" + word + "</span>")

    } else if (partOfSpeech === 'determiner'){
        $(".solarizedTxt").append("<span style=color:" + solarized_magenta + ">" + word + "</span>")

    } else if (partOfSpeech === undefined){
        $(".solarizedTxt").append("<span style=color:" + solarized_baseDark + ">" + word + "</span>")
    }


}//changeColor
