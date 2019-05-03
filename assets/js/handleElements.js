const handleElements = (() =>{

    const _create = (container,typeElement,fn,event,data,clas) => {

        data.forEach(element => {
            var newElement = document.createElement(typeElement);
            newElement.innerHTML = element;
            newElement.setAttribute('id',typeElement+'-'+element);
            newElement.setAttribute('class',clas);
            newElement.addEventListener(event,fn);
            container.appendChild(newElement);
        });
    };

    return {
        create:_create
    };
})();