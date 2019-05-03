const main = (() =>{
    const letters = ['a','b','c','d','e','f','g','h',
                 'i','k','l','m','n','ñ','o','q',
                 'r','s','t','u','v','w','x','y',
                 'z'];
    const palabras = ['francia','españa','canada','peru','ecuador','australia',
                      'diamarca','egipto','inglaterra','rusia','brasil','argentina'];

    let $div = document.getElementById('btns');
    let $divInputs = document.getElementById('div-inputs');
    let $labelCont = document.getElementById('contador');
    let $img = document.getElementById('img-ahorcado');
    let inputs = document.getElementsByTagName('input');
    game.defineWord(palabras[Math.round(Math.random() * (12 - 0) + 0)]);
    handleElements.create($divInputs,'input',()=>{},'click',game.getWord().split(''),'input');
    
    const fnBtns = (event) => {
        game.run($img,$labelCont,inputs,event.target.innerText);
    };

    handleElements.create($div,'button',fnBtns,'click',letters,'btn-letter');

})();
