class Component{
    constructor(config){
        for(const propertyName in config){
            this[propertyName] = config[propertyName];
        }
        this.element = document.createElement('div');
        this.element.classList.add('cmp-container');
    }

    setTitle(title){
        this.titleEl = document.createElement('div');
        this.titleEl.classList.add('cmp-title');
        this.titleEl.innerText = title;
        this.element.appendChild(this.titleEl);
    }

    setContent(content){
        this.element.innerHTML = content;
    }

    render(parent){
        parent.appendChild(this.element);
    }
}