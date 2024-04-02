class UlLi{

    constructor(pE) {
        this.parentElement = pE;
        this.ul = document.createElement('ul');
        this.element = document.createElement('div');
        this.element.appendChild(this.ul);
        pE.appendChild(this.element);
    }
    addLi(text){

        let li = document.createElement('li');
        li.innerText = text;
        this.ul.appendChild(li);
        return li;
    }
    addButton(text,callback){

        let button = document.createElement('button');
        button.innerText = text;
        this.parentElement.appendChild(button);
        button.onclick = callback;
    }
    addClass(nameClass){
        this.element.classList.add(nameClass);
    }

}