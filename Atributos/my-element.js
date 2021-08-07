class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
        this.title = this.getAttribute("title");
        this.parrafo = this.getAttribute("parrafo");
        this.imgsrc = this.getAttribute("imgsrc");
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.parrafo}</p>
                    <img src="${this.imgsrc}" />
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;
    }
    // true para que clonar con todos los descendientes
    // Cada vez que se emplee el shadowDOM hay que utilizar el shadowRoo, no document
    // esto nos aisla de las colisiones con otros estilos css
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);