class myElement extends HTMLElement {
    constructor(){
        super();
        
        this.p = document.createElement('p');

    }
    // es en connectedCallback donde se visualizará el elemento
    connectedCallback(){
        this.p.textContent = "Hola mundo !!";
        // aquí se agrega al DOM
        this.appendChild(this.p);
    }
}

customElements.define('my-element', myElement);