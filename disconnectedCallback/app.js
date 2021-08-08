class MyCustomElement extends HTMLElement {
    constructor(){
        super();
        console.log("Hola desde el constructor - Memoria");
    }
    connectedCallback(){
        console.log("Hola desde el DOM");
    }
    disconnectedCallback(){
        /*
            También puedes remover los listener o eventos que has vinculado
            con el elemento.
        */
        console.log("Adiós del DOM");
    }
}

customElements.define("my-custom-element", MyCustomElement);

// Para retirar el elemento del DOM
document.querySelector("my-custom-element").remove();