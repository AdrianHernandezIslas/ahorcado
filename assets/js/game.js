const game = (() => {
    var word = '';
    var count = 2;
    const url = 'assets/img/'

    const _defineWord = (w) =>{ word = w};
    const _getWord = () => {return word;};

    const _setLetters = (letter,arrayInputs) =>{
        var arrayWord = word.split('');
        for (let index = 0; index < arrayWord.length; index++) {
            if(arrayWord[index] === letter){
                arrayInputs[index].value = letter;
            }
        }   
    };

    const _run = (img,labelCont,arrayInputs,letter) => {
        if((count-1) !== 7){
            var index = word.indexOf(letter);
            if(index !== -1){
                _setLetters(letter,arrayInputs);
            }else{
                labelCont.innerHTML = 'Fallos: '+(count-1);
                img.setAttribute('src',url+'Ahorcado-'+(count++)+'.png');
            }
        }else{
            document.write('END GAME PERDISTE :(');
        }
        
    };

    return{
        defineWord:_defineWord,
        run:_run,
        getWord:_getWord
    };
})();