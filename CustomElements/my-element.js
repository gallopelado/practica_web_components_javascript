// Otra manera de agregar templates
const template = document.createElement('div');
template.innerHTML = `
    <style>
        .texto {
            color: red;
        }
        p {
            color: blue;
        }
    </style>
    <p>Hola mundo 2 !!<p>
    <p class="texto">texto ejemplo para la clase<p>
`;

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
        this.appendChild(template);
    }
}

customElements.define('my-element', myElement);